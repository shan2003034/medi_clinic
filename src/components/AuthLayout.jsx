import React from 'react';

function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs for Modern Look */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col md:flex-row relative z-10 border border-white">
        
        {/* Left Side: Visual Branding */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white flex flex-col justify-between relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Patient Portal</h2>
            <p className="text-blue-100 text-lg font-light leading-relaxed">
              Your health, our priority. Access your medical records and appointments securely.
            </p>
          </div>

          <div className="relative z-10 mt-12">
             <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">
                <p className="text-sm italic opacity-90 italic">"The greatest wealth is health. We are here to help you manage it better."</p>
             </div>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 bg-white">
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-500">{subtitle}</p>
          </div>
          {children}
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;