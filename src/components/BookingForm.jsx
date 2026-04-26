import React from 'react';

function BookingForm({ onSubmit }) {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
      <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Patient Details</h2>
      <p className="text-slate-500 mb-8">Please provide your information to book an appointment.</p>
      
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">First Name</label>
            <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="John" />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Last Name</label>
            <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="Doe" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Phone Number</label>
            <input type="tel" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="+94 77 123 4567" />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Email Address</label>
            <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="john@example.com" />
          </div>
        </div>

        {/* Appointment Details */}
        <div className="border-t border-slate-100 pt-6 mt-6">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Appointment Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Department</label>
              <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 appearance-none">
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Dental">Dental Care</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Preferred Doctor</label>
              <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 appearance-none">
                <option value="">Any Available Doctor</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                <option value="Dr. Michael Lee">Dr. Michael Lee</option>
                <option value="Dr. Kamal Perera">Dr. Kamal Perera</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Preferred Date</label>
              <input type="date" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600" />
            </div>
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Preferred Time</label>
              <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 appearance-none">
                <option value="Morning">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                <option value="Evening">Evening (5:00 PM - 9:00 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Reason for Visit (Optional)</label>
            <textarea rows="3" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-700 resize-none" placeholder="Briefly describe your symptoms..."></textarea>
          </div>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 mt-4">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookingForm;