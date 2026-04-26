import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import EmergencyInfo from '../components/EmergencyInfo';
import SuccessModal from '../components/SuccessModal';

function Appointments() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-4 block">Easy & Fast</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Book an Appointment
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule your visit with our expert doctors in just a few clicks. We ensure the best medical care for you.
          </p>
        </div>
      </section>

      {/* Main Content - Two Columns */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Side: Booking Form */}
            <div className="w-full lg:w-2/3">
              <BookingForm onSubmit={handleBookingSubmit} />
            </div>

            {/* Right Side: Emergency Info & Guidelines */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
              <EmergencyInfo />
              
              {/* Guidelines Card */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Patient Guidelines</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                    <span className="text-slate-500 text-sm">Please arrive 15 minutes before your scheduled appointment time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                    <span className="text-slate-500 text-sm">Bring your previous medical records if this is your first visit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                    <span className="text-slate-500 text-sm">Cancellations must be made at least 24 hours in advance.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pop-up Success Modal */}
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}

export default Appointments;