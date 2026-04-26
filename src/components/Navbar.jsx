import { useState } from "react";
import medicalLogo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

   
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/50 py-4 px-6 md:px-8 z-50 transition-all duration-300">
            <div className="container mx-auto max-w-7xl flex justify-between items-center">

                <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                    <img src={medicalLogo} alt="MediClinic Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                    <div className="text-2xl font-extrabold text-slate-800 tracking-tight">
                        MediClinic<span className="text-blue-600">.</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    <ul className="flex space-x-2 text-slate-600 font-semibold text-sm">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Services', path: '/services' },
                            { name: 'Doctors', path: '/doctors' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Contact', path: '/contact' },
                            { name: 'Appointments', path: '/appointments' }
                        ].map((link) => (
                            <li key={link.name}>
                                <Link 
                                    to={link.path}
                                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                        isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'hover:text-blue-600 hover:bg-slate-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="ml-6 pl-6 border-l border-slate-200">
                        <Link to="/login">
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 font-bold text-sm">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 focus:outline-none p-2 bg-slate-50 rounded-xl">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-slate-100 p-6">
                    <ul className="flex flex-col space-y-2 text-slate-600 font-bold text-lg">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Services', path: '/services' },
                            { name: 'Doctors', path: '/doctors' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Contact', path: '/contact' },
                            { name: 'Appointments', path: '/appointments' }
                        ].map((link) => (
                            <li key={link.name}>
                                <Link 
                                    to={link.path} 
                                    onClick={() => setIsOpen(false)} 
                                    className={`block w-full p-4 rounded-2xl transition-colors ${isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4 mt-2 border-t border-slate-100">
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl font-bold shadow-md">
                                    Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;