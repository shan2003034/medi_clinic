import React from 'react';

function BiomarkerCard({ metric }) {
  
  const getColorClasses = (color) => {
    switch(color) {
      case 'emerald': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'rose': return 'text-rose-600 bg-rose-50 border-rose-100';
      case 'amber': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'blue': return 'text-blue-600 bg-blue-50 border-blue-100';
      default: return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  const getProgressBarColor = (color) => {
    switch(color) {
      case 'emerald': return 'bg-emerald-500';
      case 'rose': return 'bg-rose-500';
      case 'amber': return 'bg-amber-500';
      case 'blue': return 'bg-blue-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-600 font-semibold text-sm w-2/3">{metric.name}</h3>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border ${getColorClasses(metric.color)}`}>
          {metric.status}
        </span>
      </div>
      
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-slate-800">{metric.value}</span>
        <span className="text-slate-400 font-medium text-sm ml-1">{metric.unit}</span>
      </div>

      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
        <div 
          className={`h-full rounded-full ${getProgressBarColor(metric.color)}`} 
          style={{ width: `${metric.percentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-slate-400 font-medium">Standard Range: {metric.range}</p>
    </div>
  );
}

export default BiomarkerCard;