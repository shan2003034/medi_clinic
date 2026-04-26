
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border border-blue-50 text-center group cursor-pointer">
      <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default ServiceCard;