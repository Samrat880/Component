export default function SummaryCard({ title, value, color }) {
    const colorMap = {
      orange: "bg-orange-100 text-orange-800",
      yellow: "bg-yellow-100 text-yellow-800",
      green: "bg-green-100 text-green-800",
      blue: "bg-blue-100 text-blue-800",
    };
    
    const iconMap = {
      orange: '⏳',
      yellow: '⏱️',
      green: '✅',
      blue: '📊'
    };

  return (
    <div className="group bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-2 group-hover:text-gray-700 transition-colors duration-200">{title}</p>
          <p className="text-3xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">{value}</p>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-r ${colorMap[color]} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
          <span className="text-white text-xl">{iconMap[color]}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <div className={`w-2 h-2 bg-gradient-to-r ${colorMap[color]} rounded-full animate-pulse`}></div>
        <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">Updated now</span>
      </div>
    </div>
  );
}