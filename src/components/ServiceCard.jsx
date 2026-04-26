import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
      
      {/* Icon Wrapper */}
      <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
      
    </div>
  );
}

export default ServiceCard;