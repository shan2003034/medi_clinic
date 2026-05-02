import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO, isSameDay, getDay } from 'date-fns';

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    department: '',
    doctorId: '',
    date: null, // Date එක දැන් Object එකක් විදිහට තමයි සේව් වෙන්නේ
    time: '',
    timeSlotId: '', 
    reason: ''
  });

  const [departmentsList, setDepartmentsList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  
  // අලුත් State ටික: ඩොක්ටර්ගේ Schedule එකයි, නිවාඩු ටිකයි, Time slots ටිකයි තියාගන්න
  const [availableDays, setAvailableDays] = useState([]);
  const [leaveDates, setLeaveDates] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [allSchedules, setAllSchedules] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 1. පිටුව ලෝඩ් වෙද්දී Departments ගේනවා
  useEffect(() => {
    fetch('http://localhost:8080/api/specializations')
      .then(response => response.json())
      .then(data => setDepartmentsList(data))
      .catch(error => console.error("Error fetching departments:", error));
  }, []);

  // 2. Department එක වෙනස් වෙද්දී Doctors ලා ගේනවා
  useEffect(() => {
    if (formData.department) {
      fetch(`http://localhost:8080/api/doctors/department/${formData.department}`)
        .then(response => response.json())
        .then(data => {
          setDoctorsList(data);
          // අලුත් ඩිපාර්ට්මන්ට් එකක් තේරුවාම යටින් තියෙන ඔක්කොම Reset කරනවා
          setFormData(prev => ({ ...prev, doctorId: '', date: null, time: '', timeSlotId: '' })); 
          setAvailableDays([]);
          setLeaveDates([]);
          setAvailableTimeSlots([]);
        })
        .catch(error => console.error("Error fetching doctors:", error));
    } else {
      setDoctorsList([]);
      setFormData(prev => ({ ...prev, doctorId: '', date: null, time: '', timeSlotId: '' }));
    }
  }, [formData.department]);

  // 3. Doctor කෙනෙක් තේරුවාම එයාගේ Availability එක (Schedules & Leaves) ගේනවා
  useEffect(() => {
    if (formData.doctorId) {
      fetch(`http://localhost:8080/api/doctors/${formData.doctorId}/availability`)
        .then(response => response.json())
        .then(data => {
          // දවස්වල නම් (Monday, Tuesday) අංක වලට හරවනවා (1, 2)
          const daysMap = { 'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6 };
          const numericDays = data.availableDays.map(day => daysMap[day]);
          
          setAvailableDays(numericDays);
          setLeaveDates(data.leaveDates.map(date => parseISO(date)));
          setAllSchedules(data.schedules);
          
          // ඩොක්ටර්ව වෙනස් කළාම Date/Time reset කරනවා
          setFormData(prev => ({ ...prev, date: null, time: '', timeSlotId: '' }));
          setAvailableTimeSlots([]);
        })
        .catch(error => console.error("Error fetching availability:", error));
    }
  }, [formData.doctorId]);

  // 4. දවසක් තේරුවාම, ඒ දවසට අදාළ Time Slots ටික ෆිල්ටර් කරලා අරගන්නවා
  useEffect(() => {
    if (formData.date && allSchedules.length > 0) {
      const selectedDayName = format(formData.date, 'EEEE'); // උදා: 'Monday'
      
      // තේරුව දවසට අදාළ schedules ටික විතරක් පෙරලා ගන්නවා
      const slotsForDay = allSchedules.filter(s => s.dayOfWeek === selectedDayName);
      setAvailableTimeSlots(slotsForDay);
      setFormData(prev => ({ ...prev, time: '', timeSlotId: '' }));
    }
  }, [formData.date, allSchedules]);

  // මේ Function එකෙන් තමයි Datepicker එකේ දවස් Disable කරන්නේ
  const isSelectableDate = (date) => {
    const day = getDay(date); // 0 (Sunday) ඉඳන් 6 (Saturday) වෙනකම් අංකයක් එනවා
    // 1. මේ දවස ඩොක්ටර් එන දවසක්ද බලනවා
    const isAvailableDay = availableDays.includes(day);
    // 2. මේ දවස ඩොක්ටර් නිවාඩු දාපු දවසක්ද බලනවා
    const isLeaveDate = leaveDates.some(leaveDate => isSameDay(date, leaveDate));
    // 3. අදට වඩා පරණ දවස් තෝරන්න බැරි කරනවා
    const isFutureDate = date >= new Date(new Date().setHours(0,0,0,0));

    // එන දවසක් වෙන්නත් ඕනේ, නිවාඩු දවසක් නොවෙන්නත් ඕනේ, අනාගත දවසක් වෙන්නත් ඕනේ
    return isAvailableDay && !isLeaveDate && isFutureDate;
  };

  // Time Dropdown එක වෙනස් වෙද්දී ID එකයි Time එකයි දෙකම සේව් කරගන්නවා
  const handleTimeChange = (e) => {
    const selectedSlotId = e.target.value;
    const selectedSlot = availableTimeSlots.find(slot => slot.timeSlotId.toString() === selectedSlotId);
    
    setFormData({
      ...formData,
      timeSlotId: selectedSlotId,
      time: selectedSlot ? selectedSlot.timeSlot : ''
    });
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
      <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Appointment Details</h2>
      <p className="text-slate-500 mb-8">Please provide your preferred time and contact details.</p>
      
      <form onSubmit={async (e) => {
          e.preventDefault();
          const finalData = {
              ...formData,
              date: formData.date ? format(formData.date, 'yyyy-MM-dd') : ''
          };
          
          // Submit කරලා ප්‍රතිඵලය එනකම් ඉන්නවා
          const isSuccess = await onSubmit(finalData);
          
          // සාර්ථක වුණොත් ඔක්කොම Reset කරනවා
          if (isSuccess) {
            setFormData({
              phoneNumber: '',
              department: '',
              doctorId: '',
              date: null,
              time: '',
              timeSlotId: '',
              reason: ''
            });
            setDoctorsList([]);
            setAvailableTimeSlots([]);
            setAvailableDays([]);
            setLeaveDates([]);
            setAllSchedules([]);
          }
      }} className="space-y-6">
        
        {/* Contact Info */}
        <div>
          <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Contact Phone Number</label>
          <input 
            type="tel" 
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required 
            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" 
            placeholder="+94 7X XXX XXXX" 
          />
        </div>

        {/* Appointment Information */}
        <div className="border-t border-slate-100 pt-6 mt-6">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Medical Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Department</label>
              <select 
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 appearance-none"
              >
                <option value="">Select Department</option>
                {departmentsList.map((dept) => (
                  <option key={dept.id} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Preferred Doctor</label>
              <select 
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                required
                disabled={!formData.department || doctorsList.length === 0} 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 appearance-none disabled:bg-slate-100 disabled:cursor-not-allowed"
              >
                <option value="">
                  {formData.department && doctorsList.length === 0 
                    ? "No doctors available" 
                    : "Select Doctor"}
                </option>
                {doctorsList.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time with React Datepicker */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Preferred Date</label>
              {/* මෙතන තමයි මැජික් එක වෙන්නේ! */}
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                filterDate={isSelectableDate} // දවස් ෆිල්ටර් කරන ෆන්ක්ෂන් එක
                minDate={new Date()} // අදින් පස්සේ දවස් විතරයි පෙන්නන්නේ
                placeholderText="Select available date"
                disabled={!formData.doctorId} // ඩොක්ටර්ව තෝරනකම් ඔබන්න බෑ
                required
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 disabled:bg-slate-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Preferred Time</label>
              <select 
                name="timeSlotId"
                value={formData.timeSlotId}
                onChange={handleTimeChange}
                required
                disabled={!formData.date || availableTimeSlots.length === 0} // දවසක් තෝරනකම් ඔබන්න බෑ
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 appearance-none disabled:bg-slate-100 disabled:cursor-not-allowed"
              >
                <option value="">
                    {formData.date && availableTimeSlots.length === 0 
                    ? "No slots available" 
                    : "Select Time Slot"}
                </option>
                {/* තේරුව දවසට අදාළ වෙලාවල් ටික විතරක් ලෝඩ් කරනවා */}
                {availableTimeSlots.map((slot) => (
                  <option key={slot.timeSlotId} value={slot.timeSlotId}>
                    {slot.timeSlot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Reason for Visit (Optional)</label>
            <textarea 
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="3" 
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-700 resize-none" 
              placeholder="Briefly describe your symptoms..."
            ></textarea>
          </div>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 mt-4 flex justify-center items-center gap-2">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookingForm;