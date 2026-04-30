import React, { useState, useRef } from 'react';

function Settings() {
  // වම් පැත්තේ මෙනුවේ තෝරලා තියෙන Tab එක මතක තියාගන්න
  const [activeTab, setActiveTab] = useState('Profile');

  // --- Profile Picture එක වෙනස් කිරීම සඳහා අලුතින් එකතු කරපු State සහ Logic ---
  const [profilePic, setProfilePic] = useState("https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop");
  const fileInputRef = useRef(null);

  const handleEditPictureClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setProfilePic(newImageUrl);
    }
  };
  // --------------------------------------------------------------------------

  return (
    <div className="animate-fade-in font-sans pb-10">
      
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">Settings & Profile</h1>
        <p className="text-slate-500">Manage your personal information, security, and privacy preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* 1. Left Sidebar Menu (Tabs) */}
        <div className="w-full lg:w-1/4 space-y-2">
          
          <button 
            onClick={() => setActiveTab('Profile')}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold text-left ${
              activeTab === 'Profile' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Personal Info
          </button>

          <button 
            onClick={() => setActiveTab('Security')}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold text-left ${
              activeTab === 'Security' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Security
          </button>

          <button 
            onClick={() => setActiveTab('Privacy')}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold text-left ${
              activeTab === 'Privacy' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Privacy & Consents
          </button>

        </div>

        {/* 2. Right Content Area */}
        <div className="w-full lg:w-3/4">
          
          {/* --- TAB 1: PROFILE INFORMATION --- */}
          {activeTab === 'Profile' && (
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Personal Information</h2>
              
              {/* Profile Picture Upload */}
              <div className="flex items-center gap-6 mb-10 pb-8 border-b border-slate-100">
                <div className="relative">
                  {/* --- හංගලා තියෙන File Input එක --- */}
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                    className="hidden" 
                  />

                  <img 
                    src={profilePic} // කලින් තිබ්බ link එක වෙනුවට state එක දැම්මා
                    alt="Profile" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <button 
                    type="button" 
                    onClick={handleEditPictureClick} // Button එක click කරාම function එක run වෙනවා
                    className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md border-2 border-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </button>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Profile Photo</h3>
                  <p className="text-slate-500 text-sm mb-2">JPG or PNG. Max size of 5MB.</p>
                </div>
              </div>

              {/* Form Grid */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">First Name</label>
                    <input type="text" defaultValue="Shan" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Last Name</label>
                    <input type="text" defaultValue="Gajanayake" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Email Address</label>
                    <input type="email" defaultValue="shan@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Phone Number</label>
                    <input type="tel" defaultValue="+94 77 123 4567" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Date of Birth</label>
                    <input type="date" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Blood Group</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium appearance-none">
                      <option>Select</option>
                      <option>A+</option><option>A-</option>
                      <option>B+</option><option>B-</option>
                      <option>O+</option><option>O-</option>
                      <option>AB+</option><option>AB-</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="font-bold text-slate-800 mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Contact Name</label>
                      <input type="text" placeholder="e.g. Jane Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Contact Phone</label>
                      <input type="tel" placeholder="Emergency Number" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button type="button" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* --- TAB 2: SECURITY --- */}
          {activeTab === 'Security' && (
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Security Settings</h2>
              <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">Ensure your medical data is protected by using a strong password.</p>
              
              <form className="space-y-6 max-w-lg">
                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2 ml-1">Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium" />
                </div>
                <div className="pt-4">
                  <button type="button" className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-slate-900 shadow-md">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* --- TAB 3: PRIVACY & CONSENTS --- */}
          {activeTab === 'Privacy' && (
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-8 border-b border-slate-100">Privacy & Consents</h2>
              
              <div className="space-y-8">
                {/* Medical Sharing Toggle */}
                <div className="flex items-start md:items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Medical Record Sharing</h3>
                    <p className="text-slate-500 text-sm">Allow authorized specialists to view your medical history to provide better care.</p>
                  </div>
                  {/* Custom CSS Toggle Button */}
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-14 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                {/* Danger Zone */}
                <div className="pt-8 border-t border-rose-100 mt-10">
                  <h3 className="font-bold text-rose-600 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    Danger Zone
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">Once you delete your account, there is no going back. Please be certain.</p>
                  <button className="bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-600 hover:text-white px-6 py-3 rounded-xl font-bold transition-colors text-sm">
                    Deactivate Account
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default Settings;