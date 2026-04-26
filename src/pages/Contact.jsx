import React, { useState } from 'react';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. Modern Hero Section with Soft Gradient */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Contact MediClinic
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-light">
            We are here to provide you with the best healthcare. Reach out for appointments, inquiries, or emergency assistance.
          </p>
        </div>
      </section>

      {/* 2. Floating Info Cards */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Phone Card */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 border border-white flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Call Us</h3>
            <p className="text-slate-500 font-medium">Emergency: +94 41 222 3333</p>
            <p className="text-slate-400 text-sm mt-1">General: +94 41 222 4444</p>
          </div>

          {/* Email Card */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 border border-white flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
            <p className="text-slate-500 font-medium">info@mediclinic.lk</p>
            <p className="text-slate-400 text-sm mt-1">We usually reply within 2 hours</p>
          </div>

          {/* Location Card */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 border border-white flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Visit Us</h3>
            <p className="text-slate-500 font-medium">123 Health Avenue,</p>
            <p className="text-slate-400 text-sm mt-1">Matara, Sri Lanka</p>
          </div>

        </div>
      </section>

      {/* 3. Modern Form & Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Form Side */}
            <div className="w-full lg:w-1/2 p-10 md:p-16">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Send a Message</h2>
                <p className="text-slate-500">Fill out the form below and our medical team will get back to you as soon as possible.</p>
              </div>
              
              {isSubmitted && (
                <div className="mb-8 bg-emerald-50 border border-emerald-100 text-emerald-600 px-6 py-4 rounded-2xl flex items-center gap-4 animate-fade-in">
                  <div className="bg-emerald-100 rounded-full p-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                  <span className="font-medium">Message sent successfully! We'll contact you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">First Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-700 placeholder-slate-400" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Last Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-700 placeholder-slate-400" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Email Address</label>
                  <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-700 placeholder-slate-400" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Message</label>
                  <textarea required rows="4" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 text-slate-700 placeholder-slate-400 resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 mt-4">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Side */}
            <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-slate-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.6416629986!2d80.50505105260173!3d5.948259451996522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d1519ef7f1%3A0xfa6fa25d70b7214b!2sMatara!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MediClinic Matara Location"
              ></iframe>
              {/* Overlay shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_20px_0_40px_rgba(0,0,0,0.05)] pointer-events-none hidden lg:block"></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;