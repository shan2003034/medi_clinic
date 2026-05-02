import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import EmergencyInfo from '../components/EmergencyInfo';
import SuccessModal from '../components/SuccessModal';
import ErrorModal from '../components/ErrorModal'; 

function Appointments() {
  // Success Modal State
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Error Modal State
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBookingSubmit = async (formData) => {
    const payload = {
      ...formData,
      patientId: 1 
    };

    try {
      const response = await fetch('http://localhost:8080/api/appointments/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        
        setSuccessMessage(data.message); 
        setIsSuccessModalOpen(true);
        return true; 
      } else {
       
        setErrorMessage(data.error || "Failed to book appointment."); 
        setIsErrorModalOpen(true);
        return false; 
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("Something went wrong with the server! Please try again later.");
      setIsErrorModalOpen(true);
      return false;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans animate-fade-in pb-10">
      <div className="mb-8 pt-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">Book an Appointment</h1>
        <p className="text-slate-500">Schedule your next visit with our specialized doctors.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-7/12 xl:w-2/3">
          <BookingForm onSubmit={handleBookingSubmit} />
        </div>

        <div className="w-full lg:w-5/12 xl:w-1/3 flex flex-col gap-6">
          <EmergencyInfo />
          
          <div className="bg-white rounded-[2rem] p-7 shadow-lg shadow-slate-200/40 border border-slate-100">
            <h4 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Patient Guidelines
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">1</span>
                </div>
                <span className="text-slate-600 text-sm leading-relaxed">Arrive 15 minutes before your scheduled appointment time.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">2</span>
                </div>
                <span className="text-slate-600 text-sm leading-relaxed">Bring your previous medical records and test reports if available.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-rose-600 font-bold text-xs">!</span>
                </div>
                <span className="text-slate-600 text-sm leading-relaxed">Cancellations must be made at least 24 hours in advance.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] p-7 text-white shadow-xl">
            <h4 className="text-lg font-bold mb-2">Need Help Booking?</h4>
            <p className="text-slate-400 text-sm mb-4">Our support team is available 24/7 to assist you with your appointments.</p>
            <button className="bg-white/10 hover:bg-white/20 text-white w-full py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 text-sm border border-white/10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Contact Support
            </button>
          </div>

        </div>
      </div>

      
      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
        message={successMessage}
      />

      
      <ErrorModal 
        isOpen={isErrorModalOpen} 
        onClose={() => setIsErrorModalOpen(false)} 
        message={errorMessage}
      />

    </div>
  );
}

export default Appointments;