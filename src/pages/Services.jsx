import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  // සේවාවන් වල දත්ත ලැයිස්තුවක් (මේ විදිහට වෙනම ගත්තම කේතය ගොඩක් පිරිසිදුයි)
  const servicesList = [
    {
      id: 1,
      icon: "❤️",
      title: "Cardiology",
      description: "Comprehensive heart care including diagnosis, treatment, and management of cardiovascular diseases.",
      features: ["ECG & Echocardiogram", "Heart Bypass Consultations", "Blood Pressure Management", "Pacemaker Check-ups"]
    },
    {
      id: 2,
      icon: "🧠",
      title: "Neurology",
      description: "Advanced care for brain, spinal cord, and nervous system disorders by expert neurologists.",
      features: ["Stroke Management", "Epilepsy Treatment", "Headache & Migraine Care", "Nerve Conduction Studies"]
    },
    {
      id: 3,
      icon: "🦷",
      title: "Dental Care",
      description: "Complete dental solutions ranging from routine check-ups to complex oral surgeries and cosmetic dentistry.",
      features: ["Teeth Whitening", "Root Canal Treatment", "Dental Implants", "Orthodontics (Braces)"]
    },
    {
      id: 4,
      icon: "🦴",
      title: "Orthopedics",
      description: "Specialized treatment for bone, joint, ligament, tendon, muscle, and nerve injuries.",
      features: ["Joint Replacement", "Fracture Care", "Arthroscopy", "Physiotherapy"]
    },
    {
      id: 5,
      icon: "👶",
      title: "Pediatrics",
      description: "Dedicated and compassionate healthcare for infants, children, and adolescents.",
      features: ["Newborn Care", "Vaccinations", "Childhood Nutrition", "Developmental Assessments"]
    },
    {
      id: 6,
      icon: "👁️",
      title: "Ophthalmology",
      description: "Complete eye care services including vision testing, surgeries, and disease management.",
      features: ["Cataract Surgery", "Laser Vision Correction", "Glaucoma Treatment", "Routine Eye Exams"]
    }
  ];

  return (
    <div className="bg-gray-50">
      
      {/* 1. Hero Section */}
      <section 
        className="relative py-24 md:py-32 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1538108149393-cebb47acddb2?q=80&w=2069&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-blue-900/85 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            Our Medical Services
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            We offer a wide range of specialized medical services tailored to meet the unique needs of every patient.
          </p>
        </div>
      </section>

      {/* 2. Detailed Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Array එකේ තියෙන දත්ත වලින් ඉබේම Cards හැදෙන්න map() එක පාවිච්චි කරලා තියෙනවා */}
            {servicesList.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition duration-300 group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Key Treatments:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600 text-sm">
                        <span className="text-green-500 mr-2">✓</span> {feature}
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Medical Attention?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Our emergency department is open 24/7. For severe medical emergencies, please do not hesitate to contact us immediately or visit our clinic.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/appointments">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
                Book an Appointment
              </button>
            </Link>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition shadow-lg w-full sm:w-auto flex items-center justify-center gap-2">
               <span>📞</span> +94 41 222 3333
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;