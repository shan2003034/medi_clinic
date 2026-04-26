import React from 'react';
import AuthLayout from '../components/AuthLayout';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join our community for better healthcare management."
    >
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1 ml-1">First Name</label>
            <input type="text" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="Shan" />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-semibold mb-1 ml-1">Last Name</label>
            <input type="text" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="Gajanayake" />
          </div>
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-semibold mb-1 ml-1">Email Address</label>
          <input type="email" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="shangaja@mail.com" />
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-semibold mb-1 ml-1">Password</label>
          <input type="password" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="Minimum 8 characters" />
        </div>

        <div className="flex items-start gap-2 ml-1 py-2">
          <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-xs text-slate-500 leading-tight">
            I agree to the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </span>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
          Register Now
        </button>

        <p className="text-center text-slate-500 text-sm mt-6">
          Already a patient? <Link to="/login" className="text-blue-600 font-bold hover:underline">Sign In here</Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignUp;