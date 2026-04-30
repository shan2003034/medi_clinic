import React, { useState, useEffect } from 'react';

function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Pagination සඳහා අලුත් State දෙකක්
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6; // එක පිටුවකට පෙන්වන වාර්තා ගණන

  // Pagination වැඩ කරන හැටි බලාගන්න අපි Mock Data ටිකක් වැඩිපුර හදමු (රෙකෝඩ්ස් 15ක්)
  const records = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    type: i % 3 === 0 ? 'Radiology' : i % 2 === 0 ? 'Lab Report' : 'Prescription',
    title: i % 3 === 0 ? `Chest X-Ray Result ${i+1}` : i % 2 === 0 ? `Blood Test ${i+1}` : `General Checkup ${i+1}`,
    doctor: i % 3 === 0 ? 'Dr. James Wilson' : i % 2 === 0 ? 'City Lab Matara' : 'Dr. Sarah Johnson',
    date: `${(i % 28) + 1} May 2026`,
    size: `${(Math.random() * 5).toFixed(1)} MB`,
    category: i % 3 === 0 ? 'Radiology' : i % 2 === 0 ? 'Laboratory' : 'Prescription'
  }));

  // 1. මුලින්ම Search/Filter වලට අනුව Data ටික වෙන් කරගන්නවා
  const filteredRecords = records.filter(record => 
    (activeFilter === 'All' || record.category === activeFilter) &&
    (record.title.toLowerCase().includes(searchTerm.toLowerCase()) || record.doctor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Filter එකක් හෝ Search එකක් කරද්දී ආයෙත් 1 වෙනි පිටුවට යන්න (UX)
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeFilter]);

  // 2. Pagination ගණනය කිරීම් (Maths)
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord); // මේ පිටුවට අදාළ ටික විතරක් කපාගන්නවා
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  // පිටුව මාරු කරන Function එක
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getIcon = (type) => {
    switch(type) {
      case 'Prescription': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
      case 'Lab Report': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>;
      case 'Radiology': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>;
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in font-sans pb-10">
      
      {/* Header & Search (වෙනසක් නෑ) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">Medical Records</h1>
          <p className="text-slate-500">Access and download your digital medical history securely.</p>
        </div>
        <div className="relative w-full md:w-80">
          <input 
            type="text" 
            placeholder="Search records..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-5 py-4 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* Filters (වෙනසක් නෑ) */}
      <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2 custom-scrollbar">
        {['All', 'Prescription', 'Laboratory', 'Radiology'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap ${
              activeFilter === filter 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' 
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100 shadow-sm'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden mb-8">
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 bg-slate-50/50 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <div className="col-span-5">Document Name</div>
          <div className="col-span-3">Source / Doctor</div>
          <div className="col-span-2">Date Added</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        <div className="divide-y divide-slate-100">
          {currentRecords.length > 0 ? (
            // මෙතනදී filteredRecords වෙනුවට අපි කපාගත්ත currentRecords පාවිච්චි කරනවා
            currentRecords.map((record) => (
              <div key={record.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-slate-50/50 transition-colors group">
                <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    record.type === 'Prescription' ? 'bg-blue-50 text-blue-600' : 
                    record.type === 'Lab Report' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    {getIcon(record.type)}
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-bold group-hover:text-blue-600 transition-colors">{record.title}</h3>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wide">{record.type} • {record.size}</p>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-3">
                  <p className="text-slate-600 text-sm font-semibold md:font-medium">{record.doctor}</p>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <p className="text-slate-500 text-sm">{record.date}</p>
                </div>
                <div className="col-span-1 md:col-span-2 text-right">
                  <button className="bg-slate-50 text-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-xl transition-all duration-300 border border-slate-100 group-hover:shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-medium italic">No medical records found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Modern Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
          
          <p className="text-sm text-slate-500 font-medium hidden sm:block">
            Showing <span className="font-bold text-slate-800">{indexOfFirstRecord + 1}</span> to <span className="font-bold text-slate-800">{Math.min(indexOfLastRecord, filteredRecords.length)}</span> of <span className="font-bold text-slate-800">{filteredRecords.length}</span> records
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {/* Previous Button */}
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
              className={`p-2 rounded-xl transition-all flex items-center justify-center ${
                currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 rounded-xl font-bold transition-all text-sm flex items-center justify-center ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className={`p-2 rounded-xl transition-all flex items-center justify-center ${
                currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

export default MedicalRecords;