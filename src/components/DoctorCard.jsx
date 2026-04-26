function DoctorCard({ name, specialty, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300 border border-blue-50">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium text-sm mb-5">{specialty}</p>
        <button className="w-full bg-blue-50 text-blue-600 py-2.5 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;