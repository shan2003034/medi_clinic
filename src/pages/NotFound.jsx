import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Modern Background Blur Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px] pointer-events-none"></div>

      {/* Premium Glassmorphism Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-blue-900/10 border border-white flex flex-col items-center text-center relative z-10 max-w-2xl w-full hover:-translate-y-2 transition-transform duration-500">
        
        {/* Modern Illustration (No downloads needed!) */}
        <div className="w-64 h-64 md:w-80 md:h-80 mb-6 relative flex items-center justify-center">
          <img 
            src="https://illustrations.popsy.co/blue/crashed-error.svg" 
            alt="404 Error Illustration" 
            className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="mb-10">
          <span className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-blue-100 to-slate-100 mb-2 block tracking-tighter">
            404
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
            Oops! Diagnosis: Page Not Found.
          </h1>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-lg">
            Looks like this section of our clinic has been moved or doesn't exist. Let's get you back to the right path!
          </p>
        </div>

        {/* Action Button */}
        <Link to="/" className="w-full sm:w-auto">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            Back to Home
          </button>
        </Link>

      </div>
    </div>
  );
}

export default NotFound;