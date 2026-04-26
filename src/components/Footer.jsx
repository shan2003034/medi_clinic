function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-20">
      <div className="container mx-auto px-6 md:px-8">
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          
          <div>
            <h3 className="text-2xl font-bold mb-4">
              MediClinic<span className="text-blue-400">.</span>
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your trusted healthcare partner. With experienced doctors and state-of-the-art facilities, we provide you with the highest quality service.
            </p>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Our Doctors</li>
              <li className="hover:text-white cursor-pointer transition">Book Appointment</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li className="hover:text-white cursor-pointer transition">Cardiology</li>
              <li className="hover:text-white cursor-pointer transition">Neurology</li>
              <li className="hover:text-white cursor-pointer transition">Pediatrics</li>
              <li className="hover:text-white cursor-pointer transition">General Practice</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>123, Health Avenue, Colombo.</li>
              <li>Phone: +94 11 234 5678</li>
              <li>Email: info@mediclinic.com</li>
            </ul>
          </div>

        </div>

       
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-300 text-sm">
          &copy; {new Date().getFullYear()} MediClinic. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;