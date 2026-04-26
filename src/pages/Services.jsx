import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const servicesList = [
    {
      id: 1,
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnosis, treatment, and management of cardiovascular diseases.",
      features: ["ECG & Echocardiogram", "Heart Bypass Consultations", "Blood Pressure Management", "Pacemaker Check-ups"]
    },
    {
      id: 2,
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>,
      title: "Neurology",
      description: "Advanced care for brain, spinal cord, and nervous system disorders by expert neurologists.",
      features: ["Stroke Management", "Epilepsy Treatment", "Headache & Migraine Care", "Nerve Conduction Studies"]
    },
    {
      id: 3,
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      title: "Dental Care",
      description: "Complete dental solutions ranging from routine check-ups to complex oral surgeries and cosmetic dentistry.",
      features: ["Teeth Whitening", "Root Canal Treatment", "Dental Implants", "Orthodontics (Braces)"]
    },
    {
      id: 4,
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>,
      title: "Orthopedics",
      description: "Specialized treatment for bone, joint, ligament, tendon, muscle, and nerve injuries.",
      features: ["Joint Replacement", "Fracture Care", "Arthroscopy", "Physiotherapy"]
    },
    {
      id: 5,
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
      title: "Pediatrics",
      description: "Dedicated and compassionate healthcare for infants, children, and adolescents.",
      features: ["Newborn Care", "Vaccinations", "Childhood Nutrition", "Developmental Assessments"]
    },
    {
      id: 6,
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>,
      title: "Ophthalmology",
      description: "Complete eye care services including vision testing, surgeries, and disease management.",
      features: ["Cataract Surgery", "Laser Vision Correction", "Glaucoma Treatment", "Routine Eye Exams"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. Modern Hero Section */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1538108149393-cebb47acddb2?q=80&w=2069&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95 backdrop-blur-sm"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Medical Services
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            We offer a wide range of specialized medical services tailored to meet the unique needs of every patient.
          </p>
        </div>
      </section>

      {/* 2. Detailed Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {servicesList.map((service) => (
              <div key={service.id} className="group bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-10 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Key Treatments:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-slate-500 text-sm font-medium">
                        <span className="text-blue-500 mr-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </span> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. Emergency & CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Need Immediate Medical Attention?</h2>
          <p className="text-blue-100 mb-10 text-lg font-light leading-relaxed">
            Our emergency department is open 24/7. For severe medical emergencies, please do not hesitate to contact us immediately or visit our clinic.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/appointments" className="w-full sm:w-auto">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
                Book an Appointment
              </button>
            </Link>
            <button className="bg-blue-800/50 backdrop-blur-md text-white border border-blue-400/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
               +94 41 222 3333
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;