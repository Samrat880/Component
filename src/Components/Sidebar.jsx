import { Link } from 'react-router-dom';

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Filings", path: "/filings" },
    { label: "Clients", path: "/clients" },
    { label: "Reports", path: "/reports" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 shadow-2xl z-50 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">🏢</span>
            </div>
            <h1 className="text-xl font-bold">Customs Portal</h1>
          </div>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <span className="group-hover:text-blue-300">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center mt-auto flex-row gap-5 cursor-pointer ">
            <div className="w-14 h-14 bg-gradient-to-b from-slate-600 to-slate-500 rounded-4xl flex items-center justify-center">
              <span className="text-white text-4xl font-bold">👨‍💼</span>
            </div>
            <h1 className="text-3xl font-bold">Samrat</h1>
          </div>
      <div className="text-center text-sm text-gray-400 mt-4">
        @Licensed Broker
      </div>
    </div>
  );
}