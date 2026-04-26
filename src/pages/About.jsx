import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-gray-50">
      
      {/* 1. Updated Modern Hero Section (With Image & Blur Overlay) */}
      <section 
        className="relative py-24 md:py-32 text-center bg-cover bg-center bg-no-repeat"
        style={{ 
          // අලුත් ලස්සන පසුබිම් පින්තූරයක්
          backgroundImage: `url('https://i.ibb.co/dJ665nZs/diverse-group-people-waiting-hospital-reception-lobby-attend-medical-appointment-with-general-practi.jpg')` 
        }}
      >
        {/* මේකෙන් කරන්නේ පින්තූරෙ උඩින් තද නිල් පාට transparent ලේයර් එකක් සහ Blur එකක් දාන එකයි (අකුරු පේන්න) */}
        <div className="absolute inset-0 bg-blue-900/85 backdrop-blur-[2px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            About MediClinic
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Providing compassionate, world-class healthcare to the Matara community and beyond.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="w-full md:w-1/2">
              <img 
                src="https://i.ibb.co/p69BXqzY/happy-doctor-holding-clipboard-with-patients.jpg" 
                alt="Hospital Building" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a simple yet profound mission, MediClinic has been at the forefront of medical excellence. We believe that everyone deserves access to high-quality healthcare in a comfortable and caring environment. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h3>
                  <p className="text-gray-500 text-sm">To deliver patient-centered healthcare with excellence in quality, service, and access.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h3>
                  <p className="text-gray-500 text-sm">To be the trusted healthcare partner for our community, setting the standard for medical care.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-16">Why Choose MediClinic?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
                🏥
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Facility</h3>
              <p className="text-gray-500">Equipped with the latest medical technology and state-of-the-art infrastructure.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
                👨‍⚕️
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Doctors</h3>
              <p className="text-gray-500">A dedicated team of highly qualified specialists and compassionate nursing staff.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
                🕒
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-500">Round-the-clock emergency services and patient support whenever you need us.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-20 bg-blue-50 text-center">
         <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Experience Better Healthcare?</h2>
         <p className="text-gray-600 mb-8 max-w-lg mx-auto">Book your appointment today and take the first step towards a healthier you.</p>
         <Link to="/appointments">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-600/30">
              Book an Appointment
            </button>
         </Link>
      </section>

    </div>
  );
}

export default About;