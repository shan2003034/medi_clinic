import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation} from 'swiper/modules';


import doctorsBanner from "../assets/doctors-banner.png"; 

function Home() {
  return (
    <div className="bg-gray-50">
      
     
      <section 
        className="w-full min-h-[85vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ 
          backgroundImage: `url(${doctorsBanner})` 
        }}
      >
        <div className="container mx-auto px-6 md:px-8">
          
          
          <div className="flex justify-center md:justify-start">
            
            <div className="w-full md:w-1/2 bg-white/95 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-2xl border border-white/50 text-center md:text-left">
              
              <p className="text-gray-600 font-medium mb-3">
                Your Health is our Priority
              </p>
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-5">
                Medi Clinic
              </h1>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Best Services
              </h2>
              
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-600/30">
                Contact us
              </button>

            </div>

          </div>

        </div>
      </section>

      
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          
          <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-md transition duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">10+</h2>
            <p className="text-gray-600 font-semibold mt-3">Years Experience</p>
          </div>

          <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-md transition duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">50+</h2>
            <p className="text-gray-600 font-semibold mt-3">Expert Doctors</p>
          </div>

          <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-md transition duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">10k+</h2>
            <p className="text-gray-600 font-semibold mt-3">Happy Patients</p>
          </div>

          <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-md transition duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">15+</h2>
            <p className="text-gray-600 font-semibold mt-3">Clinic Branches</p>
          </div>

        </div>
      </section>

      {/* service section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Top Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We provide a wide range of medical services to ensure you and your family stay healthy and happy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon="❤️" title="Cardiology" description="Expert heart care and treatments using the latest technology." />
            <ServiceCard icon="🧠" title="Neurology" description="Comprehensive care for brain, spine, and nervous system disorders." />
            <ServiceCard icon="🦷" title="Dental Care" description="Complete dental care from regular checkups to complex surgeries." />
          </div>
        </div>
      </section>

      
      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our team of highly qualified and experienced doctors are here to serve you.</p>
          </div>
          
          <Swiper
            effect={'coverflow'} 
            grabCursor={true} 
            centeredSlides={true} 
            loop={true} 
            navigation={true}
            
           
            slidesPerView={'auto'} 
            
            coverflowEffect={{
              rotate: -35,    
              stretch: 0,
              depth: 250,     
              modifier: 1,
              slideShadows: false, 
            }}
            autoplay={{
              delay: 3000,
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