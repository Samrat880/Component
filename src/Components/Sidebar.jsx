import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-screen p-4 hidden md:block">
      <h1 className="text-xl font-bold mb-6">Customs Portal</h1>
      <nav className="space-y-2">
        <Link to="/dashboard" className="block text-blue-600">Dashboard</Link>
        <Link to="#" className="block text-gray-700">Filings</Link>
        <Link to="#" className="block text-gray-700">Customers</Link>
        <Link to="#" className="block text-gray-700">Help</Link>
      </nav>
      <div className="absolute bottom-4 left-4 text-sm text-gray-500">John Doe — Licensed Broker</div>
    </div>
  );
}
