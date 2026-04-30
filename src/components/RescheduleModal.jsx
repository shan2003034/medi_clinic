import React from 'react';

function RescheduleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-md w-full shadow-2xl shadow-blue-900/20 border border-slate-100 animate-fade-in relative">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-rose-500 bg-slate-50 hover:bg-rose-50 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
        
        <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Reschedule Visit</h3>
        <p className="text-slate-500 mb-8 text-sm">Select a new date and time for your appointment with Dr. Sarah Johnson.</p>

        <form className="space-y-5">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">New Date</label>
            <input type="date" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600" />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">New Time Slot</label>
            <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-600 appearance-none">
              <option>10:00 AM - 10:30 AM</option>
              <option>11:30 AM - 12:00 PM</option>
              <option>02:00 PM - 02:30 PM</option>
            </select>
          </div>
          <button type="button" onClick={onClose} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 mt-4">
            Confirm Reschedule
          </button>
        </form>

      </div>
    </div>
  );
}

export default RescheduleModal;