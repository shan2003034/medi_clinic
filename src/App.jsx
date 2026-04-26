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
import NotFound from './pages/NotFound';
import PatientLayout from './components/PatientLayout';
import Dashboard from './components/Dashboard';


function App() {
  return (
   
    <Router>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/dashboard"
          element={
            <PatientLayout>
              <Dashboard />
            </PatientLayout>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;