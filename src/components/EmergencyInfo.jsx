import React from 'react';

function EmergencyInfo() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-6 tracking-tight">Need Immediate Help?</h3>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-blue-500/20 p-3 rounded-xl text-blue-300">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <div>
              <p className="text-blue-200 text-sm">Emergency Line</p>
              <p className="text-xl font-bold">+94 41 222 3333</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-blue-100 border-b border-white/10 pb-2">Opening Hours</h4>
          <div className="flex justify-between text-sm text-blue-200">
            <span>Monday - Friday</span>
            <span>08:00 AM - 10:00 PM</span>
          </div>
          <div className="flex justify-between text-sm text-blue-200">
            <span>Saturday - Sunday</span>
            <span>09:00 AM - 08:00 PM</span>
          </div>
          <div className="flex justify-between text-sm text-blue-200 font-bold">
            <span>Emergency Unit</span>
            <span className="text-emerald-400">24/7 Open</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyInfo;