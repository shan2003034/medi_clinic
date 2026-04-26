import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// මේවා අපි ටෙස්ට් කරන්න හදපු තාවකාලික පිටු (Dummy Pages)




function App() {
  return (
    // Router එකෙන් මුළු වෙබ්සයිට් එකම ආවරණය කරනවා
    <Router>
      <Navbar />
      
      {/* පිටුවෙන් පිටුවට මාරු වෙන කොටස (Routes) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/doctors" element={<Doctors />} />
         <Route path="/appointments" element={<Appointments />} />
         <Route path="/login" element={<Login  />} />
         <Route path="/signUp" element={<SignUp />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;