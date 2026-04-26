import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="animate-fade-in font-sans pb-10">
      
      {/* 1. Welcome Banner (Gradient) */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden mb-10 border border-blue-400/20">
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-blue-200 font-medium mb-1 text-lg">Good Afternoon,</p>
            
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Shan Gajanayake</h1>
            <p className="text-blue-100 max-w-lg leading-relaxed">
              Welcome to your personal health portal. You have 1 upcoming appointment this week. Stay healthy!
            </p>
          </div>
          
          <Link to="/appointments">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 whitespace-nowrap">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              New Booking
            </button>
          </Link>
        </div>
      </div>

      {/* 2. Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Stat Card 1 */}
        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <p className="text-slate-500 font-medium mb-1">Upcoming</p>
            <h3 className="text-2xl font-extrabold text-slate-800">01 Visit</h3>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <div>
            <p className="text-slate-500 font-medium mb-1">Lab Results</p>
            <h3 className="text-2xl font-extrabold text-slate-800">02 Ready</h3>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <div>
            <p className="text-slate-500 font-medium mb-1">Prescriptions</p>
            <h3 className="text-2xl font-extrabold text-slate-800">03 Active</h3>
          </div>
        </div>

      </div>

      {/* 3. Main Content Area (Two Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Next Appointment (Takes up 2/3 width) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-2xl font-bold text-slate-800">Next Appointment</h2>
            <button className="text-blue-600 font-semibold hover:underline">View All</button>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            {/* Edge Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
            
            {/* Date Block */}
            <div className="bg-blue-50 rounded-2xl p-6 text-center min-w-[120px]">
              <p className="text-blue-600 font-bold uppercase tracking-wider mb-1 text-sm">May</p>
              <h3 className="text-4xl font-extrabold text-blue-700">12</h3>
              <p className="text-slate-500 font-medium mt-1 text-sm">Tuesday</p>
            </div>

            {/* Doctor Details */}
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6 w-full text-center md:text-left">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Doctor" 
                className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-800">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">Cardiology Specialist</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-500 text-sm">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 10:00 AM - 10:30 AM</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Room 302</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-colors">Reschedule</button>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Activity / Quick Actions (Takes up 1/3 width) */}
        <div>
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-2xl font-bold text-slate-800">Recent Updates</h2>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <ul className="space-y-6">
              
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm">Blood Test Results Available</p>
                  <p className="text-slate-500 text-xs mt-1">Today, 09:30 AM</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm">Appointment Confirmed</p>
                  <p className="text-slate-500 text-xs mt-1">Yesterday, 14:15 PM</p>
                </div>
              </li>

            </ul>

            <button className="w-full mt-8 bg-slate-50 hover:bg-slate-100 text-blue-600 border border-slate-200 py-3 rounded-xl font-bold transition-colors">
              View All History
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;