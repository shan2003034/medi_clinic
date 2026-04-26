import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. Modern Hero Section (Gradient + Image Blend) */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://i.ibb.co/dJ665nZs/diverse-group-people-waiting-hospital-reception-lobby-attend-medical-appointment-with-general-practi.jpg')` 
        }}
      >
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95 backdrop-blur-sm"></div>

        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-4 block">Discover Our Journey</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            About MediClinic
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Providing compassionate, world-class healthcare to the Matara community and beyond.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image with Modern Soft Shadow */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://i.ibb.co/p69BXqzY/happy-doctor-holding-clipboard-with-patients.jpg" 
                alt="Happy Doctor with Patients" 
                className="rounded-[2.5rem] shadow-2xl shadow-slate-300/50 object-cover w-full h-[450px] relative z-10"
              />
            </div>

            {/* Content & Glassmorphism Cards */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">Our Story</h2>
              <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                Founded with a simple yet profound mission, MediClinic has been at the forefront of medical excellence. We believe that everyone deserves access to high-quality healthcare in a comfortable and caring environment. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Our Mission</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">To deliver patient-centered healthcare with excellence in quality, service, and access.</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Our Vision</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">To be the trusted healthcare partner for our community, setting the standard for medical care.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section - Modern Icons */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Excellence</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-16 tracking-tight">Why Choose MediClinic?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h6m-6 4h6m-6 4h6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">Modern Facility</h3>
              <p className="text-slate-500 leading-relaxed">Equipped with the latest medical technology and state-of-the-art infrastructure.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">Expert Doctors</h3>
              <p className="text-slate-500 leading-relaxed">A dedicated team of highly qualified specialists and compassionate nursing staff.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">24/7 Support</h3>
              <p className="text-slate-500 leading-relaxed">Round-the-clock emergency services and patient support whenever you need us.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Modern Call to Action */}
      <section className="py-24 bg-slate-50 text-center">
         <div className="container mx-auto px-6 max-w-4xl bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden">
           {/* Decorative Background blob */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl"></div>
           
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">Ready to Experience Better Healthcare?</h2>
             <p className="text-slate-500 mb-10 max-w-xl mx-auto text-lg">Book your appointment today and take the first step towards a healthier you with our expert medical team.</p>
             <Link to="/appointments">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                  Book an Appointment
                </button>
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
}

export default About;