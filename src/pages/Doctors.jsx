import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Doctors() {
  
  const doctorsList = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", experience: "15 Years", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, name: "Dr. Michael Lee", specialty: "Neurology", experience: "12 Years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, name: "Dr. Emily Chen", specialty: "Pediatrics", experience: "8 Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" },
    { id: 4, name: "Dr. James Wilson", specialty: "Surgery", experience: "20 Years", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" },
    { id: 5, name: "Dr. Kamal Perera", specialty: "Cardiology", experience: "10 Years", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, name: "Dr. Nimali Silva", specialty: "Pediatrics", experience: "5 Years", image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=1976&auto=format&fit=crop" }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Surgery'];

  const filteredDoctors = selectedCategory === 'All' 
    ? doctorsList 
    : doctorsList.filter(doctor => doctor.specialty === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Modern Hero Section (Matched with Contact Design) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-4 block">Trusted Professionals</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Meet Our Experts
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Our team of world-class specialists is dedicated to providing you with advanced medical care and personalized treatment.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar - Modern Sticky UI */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-7 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Doctors Grid - Modern Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/60 border border-white hover:-translate-y-2 transition-all duration-500">
                
                {/* Image Container with Specialty Badge */}
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                     <span className="bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold px-4 py-2 rounded-2xl shadow-sm uppercase tracking-widest">
                       {doctor.specialty}
                     </span>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-extrabold text-slate-800 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    {doctor.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="bg-slate-100 p-1.5 rounded-lg">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <span className="text-slate-500 font-medium text-sm">{doctor.experience} of Expertise</span>
                  </div>
                  
                  <Link to="/appointments">
                    <button className="w-full bg-slate-50 text-blue-600 font-bold py-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                      Book Appointment
                    </button>
                  </Link>
                </div>

              </div>
            ))}

          </div>

          {/* Empty State */}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[3rem] shadow-inner border border-slate-100 max-w-4xl mx-auto">
              <div className="text-6xl mb-6 opacity-30">🔍</div>
              <h3 className="text-2xl text-slate-400 font-semibold">No specialists found in this category.</h3>
              <p className="text-slate-400 mt-2">Try selecting a different medical department.</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Show all doctors
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default Doctors;