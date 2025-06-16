
export default function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 shadow-2xl">
      <div className="mb-8">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold">🏢</span>
        </div>
        <h1 className="text-xl font-bold">Customs Portal</h1>
      </div>
    </div>
      <nav className="space-y-2">
      {['Dashboard', 'Filings', 'Clients', 'Reports', 'Settings'].map((item) => (
        <div key={item} className="px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer group">
          <span className="group-hover:text-blue-300 transition-colors duration-200">{item}</span>
        </div>
      ))}
      </nav>
    </div>
  );
}
