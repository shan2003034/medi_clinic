import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';

// මේවා අපි ටෙස්ට් කරන්න හදපු තාවකාලික පිටු (Dummy Pages)


const Contact = () => <div className="py-32 text-center text-3xl font-bold text-gray-700">Contact Us Page එක ළඟදීම බලාපොරොත්තු වන්න...</div>;

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
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;