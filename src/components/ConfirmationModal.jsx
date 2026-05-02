import React from 'react';

function ConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Are you sure?", 
  message = "Do you really want to perform this action? This cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel"
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity p-4">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-sm w-full mx-auto shadow-2xl shadow-slate-900/20 text-center transform scale-100 animate-fade-in border border-slate-100">
        
        {/* Warning Icon */}
        <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500 mb-8 leading-relaxed font-medium">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 bg-slate-100 text-slate-700 font-bold py-3.5 rounded-2xl hover:bg-slate-200 transition-colors"
          >
            {cancelText}
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 bg-rose-500 text-white font-bold py-3.5 rounded-2xl hover:bg-rose-600 shadow-lg shadow-rose-500/30 transition-all hover:-translate-y-0.5"
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
}

export default ConfirmationModal;