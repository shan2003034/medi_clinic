import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import { Link } from 'react-router-dom';

import doctorsBanner from "../assets/doctors-banner.png"; 

function Home() {
  return (
    <div className="bg-slate-50 font-sans">
      
      {/* 1. Modern Hero Section */}
      <section 
        className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${doctorsBanner})` }}
      >
        {/* Soft Gradient Overlay over the banner image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 mt-10">
          <div className="flex justify-center md:justify-start max-w-7xl mx-auto">
            
            {/* Premium Glassmorphism Box */}
            <div className="w-full md:w-[55%] lg:w-[45%] bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/20 border border-white/60 text-center md:text-left">
              
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 font-bold tracking-wider text-sm mb-6 uppercase">
                Your Health is our Priority
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 leading-tight mb-4 tracking-tight">
                MediClinic<span className="text-blue-500">.</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8">
                Excellence in Medical Services
              </h2>
              
              <Link to="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Contact Us Today
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Modern Stats Section */}
      <section className="bg-white py-16 relative z-20 -mt-10 mx-4 md:mx-auto md:max-w-6xl rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          
          <div className="group">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-2 group-hover:scale-110 transition-transform">10+</h2>
            <p className="text-slate-500 font-semibold tracking-wide">Years Experience</p>
          </div>

          <div className="group">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-2 group-hover:scale-110 transition-transform">50+</h2>
            <p className="text-slate-500 font-semibold tracking-wide">Expert Doctors</p>
          </div>

          <div className="group">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-2 group-hover:scale-110 transition-transform">10k+</h2>
            <p className="text-slate-500 font-semibold tracking-wide">Happy Patients</p>
          </div>

          <div className="group">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-2 group-hover:scale-110 transition-transform">15+</h2>
            <p className="text-slate-500 font-semibold tracking-wide">Clinic Branches</p>
          </div>

        </div>
      </section>

      {/* 3. Top Services Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Our Top Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We provide a wide range of medical services to ensure you and your family stay healthy and happy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard icon="❤️" title="Cardiology" description="Expert heart care and treatments using the latest technology." />
            <ServiceCard icon="🧠" title="Neurology" description="Comprehensive care for brain, spine, and nervous system disorders." />
            <ServiceCard icon="🦷" title="Dental Care" description="Complete dental care from regular checkups to complex surgeries." />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="bg-white text-blue-600 border border-blue-100 px-8 py-3 rounded-2xl font-bold hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Experts (Swiper) */}
      <section className="bg-white py-24 px-6 overflow-hidden border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Top Professionals</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Meet Our Experts</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our team of highly qualified and experienced doctors are here to serve you with personalized care.</p>
          </div>
          
          <Swiper
            effect={'coverflow'} 
            grabCursor={true} 
            centeredSlides={true} 
            loop={true} 
            navigation={true}
            slidesPerView={'auto'} 
            coverflowEffect={{
              rotate: -20,    
              stretch: 0,
              depth: 200,     
              modifier: 1,
              slideShadows: false, 
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="w-full py-12 doctors-swiper"
          >
            <SwiperSlide className="max-w-sm">
              <DoctorCard name="Dr. Sarah Johnson" specialty="Cardiologist" image="https://i.ibb.co/qLrzbGgM/young-brunette-female-doctor-sitting-table-working-hospital-office-health-care-insurance-help-concep.webp" />
            </SwiperSlide>
            <SwiperSlide className="max-w-sm">
              <DoctorCard name="Dr. Michael Lee" specialty="Neurologist" image="https://i.ibb.co/0yKGv8kg/beautiful-young-female-doctor-looking-camera-office-1301-7781.webp" />
            </SwiperSlide>
            <SwiperSlide className="max-w-sm">
              <DoctorCard name="Dr. Emily Chen" specialty="Pediatrician" image="https://i.ibb.co/WWD0v7Nn/doctor-lady-patient-consultation-friendly-smile-reliable-virology-clinic-crossed-arms-wearing-lab-co.webp" />
            </SwiperSlide>
            <SwiperSlide className="max-w-sm">
              <DoctorCard name="Dr. James Wilson" specialty="General Surgeon" image="https://i.ibb.co/8LvR4VkK/portrait-of-happy-male-doctor-standing-by-window.webp" />
            </SwiperSlide>
            <SwiperSlide className="max-w-sm">
              <DoctorCard name="Dr. Kamal Perera" specialty="Eye Surgeon" image="https://i.ibb.co/GfXGbjYg/360-F-450036145-N9b0t-H41c-Hk-Jh-Bds-EAf4a-Z18-Ru1r-Q8r-E.webp" />
            </SwiperSlide>
          </Swiper>
          
        </div>
      </section>

    </div>
  );
}

export default Home;