import React from 'react';
import AuthLayout from '../components/AuthLayout';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Please enter your details to access your portal."
    >
      <form className="space-y-6">
        <div>
          <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Email Address</label>
          <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="example@mail.com" />
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Password</label>
          <input type="password" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300" placeholder="••••••••" />
        </div>

        <div className="flex items-center justify-between ml-1">
          <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /> Remember me
          </label>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot Password?</a>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
          Sign In
        </button>

        <p className="text-center text-slate-500 text-sm mt-8">
          Don't have an account? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Create Account</Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;