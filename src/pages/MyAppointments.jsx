import React, { useState } from 'react';
import RescheduleModal from '../components/RescheduleModal';
import NotesModal from '../components/NotesModal';

function MyAppointments() {
    // Tabs මාරු කරන්න හදපු State එක (මුලින්ම Upcoming පෙන්වයි)
    const [activeTab, setActiveTab] = useState('Upcoming');
    const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
    const [isNotesOpen, setIsNotesOpen] = useState(false);

    // චැනල් කිරීම් වල දත්ත (Mock Data)
    const appointmentsList = [
        {
            id: 1,
            doctorName: "Dr. Sarah Johnson",
            specialty: "Cardiology",
            date: "12 May",
            fullDate: "12 May 2026, Tuesday",
            time: "10:00 AM - 10:30 AM",
            status: "Upcoming",
            type: "In-Person",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            doctorName: "Dr. Michael Lee",
            specialty: "Neurology",
            date: "28 May",
            fullDate: "28 May 2026, Thursday",
            time: "02:00 PM - 02:45 PM",
            status: "Upcoming",
            type: "Video Consult",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            doctorName: "Dr. Emily Chen",
            specialty: "Pediatrics",
            date: "10 Apr",
            fullDate: "10 April 2026, Friday",
            time: "09:00 AM - 09:30 AM",
            status: "Past",
            type: "In-Person",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    // තෝරාගත් Tab එකට අනුව දත්ත ෆිල්ටර් කිරීම
    const filteredAppointments = appointmentsList.filter(app => app.status === activeTab);

    return (
        <div className="animate-fade-in font-sans pb-10">

            {/* 1. Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">My Appointments</h1>
                <p className="text-slate-500">View and manage your upcoming and past medical appointments.</p>
            </div>

            {/* 2. Modern Tabs */}
            <div className="flex flex-wrap gap-4 mb-10 bg-white p-2 rounded-3xl w-max shadow-sm border border-slate-100">
                <button
                    onClick={() => setActiveTab('Upcoming')}
                    className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${activeTab === 'Upcoming'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                        : 'text-slate-500 hover:bg-slate-50'
                        }`}
                >
                    Upcoming
                </button>
                <button
                    onClick={() => setActiveTab('Past')}
                    className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${activeTab === 'Past'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                        : 'text-slate-500 hover:bg-slate-50'
                        }`}
                >
                    Past History
                </button>
            </div>

            {/* 3. Appointments List */}
            <div className="space-y-6">

                {filteredAppointments.length === 0 ? (
                    /* Empty State */
                    <div className="bg-white rounded-[2.5rem] p-16 text-center border border-slate-100 shadow-sm">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-2">No {activeTab} Appointments</h3>
                        <p className="text-slate-500 mb-6">You don't have any {activeTab.toLowerCase()} appointments at the moment.</p>
                        {activeTab === 'Upcoming' && (
                            <button className="bg-blue-50 text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-100 transition-colors">
                                Book New Appointment
                            </button>
                        )}
                    </div>
                ) : (
                    /* Appointment Cards */
                    filteredAppointments.map((appointment) => (
                        <div key={appointment.id} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col md:flex-row items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">

                            {/* Left Edge Indicator Line */}
                            <div className={`absolute left-0 top-0 bottom-0 w-2 ${appointment.status === 'Upcoming' ? 'bg-blue-500' : 'bg-slate-300'}`}></div>

                            {/* Date Block */}
                            <div className={`rounded-2xl p-6 text-center min-w-[120px] ${appointment.status === 'Upcoming' ? 'bg-blue-50' : 'bg-slate-50'}`}>
                                <h3 className={`text-3xl font-extrabold ${appointment.status === 'Upcoming' ? 'text-blue-600' : 'text-slate-500'}`}>
                                    {appointment.date.split(' ')[0]}
                                </h3>
                                <p className={`font-bold uppercase tracking-widest text-xs mt-1 ${appointment.status === 'Upcoming' ? 'text-blue-400' : 'text-slate-400'}`}>
                                    {appointment.date.split(' ')[1]}
                                </p>
                            </div>

                            {/* Details Section */}
                            <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full text-center sm:text-left">
                                <img
                                    src={appointment.image}
                                    alt={appointment.doctorName}
                                    className="w-20 h-20 rounded-full object-cover shadow-sm border-2 border-white"
                                />
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1 justify-center sm:justify-start">
                                        <h3 className="text-xl font-bold text-slate-800">{appointment.doctorName}</h3>
                                        {/* Status Badge */}
                                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest w-max mx-auto sm:mx-0 ${appointment.status === 'Upcoming' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-500 border border-slate-200'
                                            }`}>
                                            {appointment.status === 'Upcoming' ? 'Confirmed' : 'Completed'}
                                        </span>
                                    </div>

                                    <p className="text-blue-600 font-medium text-sm mb-3">{appointment.specialty} Specialist</p>

                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-500 text-sm font-medium">
                                        <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg"><svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> {appointment.fullDate}</span>
                                        <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg"><svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {appointment.time}</span>
                                        <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg"><svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> {appointment.type}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions Section */}
                            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
                                {appointment.status === 'Upcoming' ? (
                                    <>
                                        <button
                                            onClick={() => setIsRescheduleOpen(true)}
                                            className="bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white px-6 py-2.5 rounded-xl font-bold transition-colors text-sm border border-slate-100 hover:border-blue-600 shadow-sm w-full"
                                        >
                                            Reschedule
                                        </button>
                                        <button className="bg-slate-50 text-rose-500 hover:bg-rose-50 px-6 py-2.5 rounded-xl font-bold transition-colors text-sm border border-slate-100 w-full">Cancel</button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => setIsNotesOpen(true)}
                                        className="bg-slate-50 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-xl font-bold transition-colors text-sm border border-slate-100 w-full"
                                    >
                                        View Notes
                                    </button>
                                )}
                            </div>

                        </div>
                    ))
                )}

            </div>

            <RescheduleModal isOpen={isRescheduleOpen} onClose={() => setIsRescheduleOpen(false)} />
            <NotesModal isOpen={isNotesOpen} onClose={() => setIsNotesOpen(false)} />
        </div>
    );
}

export default MyAppointments;