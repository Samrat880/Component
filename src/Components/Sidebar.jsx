import { Link } from 'react-router-dom';

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Filings", path: "/filings", icon: "📁" },
    { label: "Clients", path: "/clients", icon: "👥" },
    { label: "Reports", path: "/reports", icon: "📄" },
    { label: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-20 md:w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4 shadow-2xl z-50 flex flex-col justify-between">
      <div>
        <div className="mb-8 flex items-center space-x-4 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">🏢</span>
          </div>
          <h1 className="text-xl font-bold hidden md:block">Customs Portal</h1>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden md:inline group-hover:text-blue-300">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center mt-auto space-x-3">
        <div className="w-10 h-10 bg-gradient-to-b from-slate-600 to-slate-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">👨‍💼</span>
        </div>
        <h1 className="text-base font-bold hidden md:block">Samrat</h1>
      </div>
      <div className="text-center text-xs text-gray-400 mt-2 hidden md:block">
        @Licensed Broker
      </div>
    </div>
  );
}
