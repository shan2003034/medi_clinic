import { useState } from "react";
import medicalLogo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-4 px-6 md:px-8 relative z-50">
            <div className="container mx-auto flex justify-between items-center">

                {/* ලෝගෝ එක සහ නම (මේක ක්ලික් කළාමත් Home එකට යන විදිහට හැදුවා) */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <img src={medicalLogo} alt="MediClinic Logo" className="h-10 w-auto" />
                    <div className="text-2xl font-bold text-blue-600">
                        MediClinic<span className="text-gray-800">.</span>
                    </div>
                </Link>

                {/* පරිගණක සඳහා මෙනුව (Desktop Menu) */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-gray-600 font-medium">
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/doctors">Doctors</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/appointments">Appointments</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/about">About us</Link>
                        </li>
                    </ul>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium shadow-sm">
                        Login / Sign Up
                    </button>
                </div>

                {/* ෆෝන් එකට පෙනෙන මෙනු බට්න් එක (Mobile Menu Toggle) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* ෆෝන් එකට පෙනෙන මෙනුව (Mobile Menu) */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
                    <ul className="flex flex-col py-4 px-6 space-y-4 text-gray-600 font-medium">
                        {/* ලින්ක් එකක් ක්ලික් කරපු ගමන් මෙනු එක වැහෙන්න onClick එකක් දැම්මා */}
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block w-full">Home</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/services" onClick={() => setIsOpen(false)} className="block w-full">Services</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/doctors" onClick={() => setIsOpen(false)} className="block w-full">Doctors</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/appointments" onClick={() => setIsOpen(false)} className="block w-full">Appointments</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full">Contact</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer transition">
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block w-full">About us</Link>
                        </li>
                        <li className="pt-4 border-t border-gray-100">
                            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium shadow-sm">
                                Login / Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;