import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Doctors() {
  // වෛද්‍යවරුන්ගේ දත්ත ගොනුව (Array of Objects)
  const doctorsList = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", experience: "15 Years", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, name: "Dr. Michael Lee", specialty: "Neurology", experience: "12 Years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, name: "Dr. Emily Chen", specialty: "Pediatrics", experience: "8 Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" },
    { id: 4, name: "Dr. James Wilson", specialty: "Surgery", experience: "20 Years", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" },
    { id: 5, name: "Dr. Kamal Perera", specialty: "Cardiology", experience: "10 Years", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, name: "Dr. Nimali Silva", specialty: "Pediatrics", experience: "5 Years", image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=1976&auto=format&fit=crop" }
  ];

  // දැනට තෝරාගෙන ඇති අංශය (Category) මතක තබා ගන්නා State එක (මුලින්ම 'All' පෙන්වයි)
  const [selectedCategory, setSelectedCategory] = useState('All');

  // බොත්තම් සඳහා අංශ ලැයිස්තුව
  const categories = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Surgery'];

  // තෝරාගත් අංශයට අනුව වෛද්‍යවරුන්ව Filter කිරීමේ ලොජික් එක
  const filteredDoctors = selectedCategory === 'All' 
    ? doctorsList 
    : doctorsList.filter(doctor => doctor.specialty === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. Modern Hero Section */}
      <section 
        className="relative py-24 md:py-32 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-blue-900/85 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            Meet Our Experts
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Our team of highly qualified and experienced doctors are here to provide you with the best possible care.
          </p>
        </div>
      </section>

      {/* 2. Filter / Category Buttons */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Filter කරපු වෛද්‍යවරුන්ව පෙන්වීම */}
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                
                {/* Doctor Image */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                     <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                       {doctor.specialty}
                     </span>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                  <p className="text-gray-500 mb-4">{doctor.experience} of Experience</p>
                  
                  {/* Book Appointment Button */}
                  <Link to="/appointments">
                    <button className="w-full bg-blue-50 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300">
                      Book Appointment
                    </button>
                  </Link>
                </div>

              </div>
            ))}

          </div>

          {/* වෛද්‍යවරුන් නැති නම් පෙන්වන පණිවිඩය (අමතර ආරක්ෂාවට) */}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl text-gray-500 font-medium">No doctors found in this category.</h3>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default Doctors;