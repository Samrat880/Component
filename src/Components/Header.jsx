import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center mb-3 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <button
        onClick={handleLogout}
        className="text-sm font-bold bg-gradient-to-b from-slate-800 to-slate-600 text-white rounded-xl px-3 py-1 cursor-pointer hover:from-slate-700 hover:to-slate-500 transition-all duration-300"
      >
        LogOut
      </button>
    </div>
  );
}