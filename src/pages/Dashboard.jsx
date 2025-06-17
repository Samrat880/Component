import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import SummaryCard from "../Components/SummaryCard";
import { filings } from "../data/dummyData";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (error) return <p className="text-red-500 p-4">Error loading data</p>;
  if (loading) return <p className="text-4xl min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden ">Loading...</p>;
  return (
  <div className="flex flex-col md:flex-row min-h-screen ml-20">
    <Sidebar />
    <div className="flex-1 bg-gray-50 p-4 md:ml-44">
      <Header />
      <div className="grid grid-cols-1  md:grid-cols-4 gap-4 mb-6 ">
        <SummaryCard title="Pending Filings" value="3" color="orange" />
        <SummaryCard title="Awaiting Approval" value="4" color="yellow" />
        <SummaryCard title="Completed Today" value="12" color="green" />
        <SummaryCard title="Total Filings" value="47" color="blue" />
      </div>
      <h2 className="text-lg font-semibold mb-4">Recent Filings</h2>
      <div className="space-y-2">
        {filings.map((filing, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {filing.title}{" "}
                <span
                  className={`text-sm px-2 py-0.5 rounded font-medium 
                    ${filing.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                      filing.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      filing.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'}
                  `}>
                  {filing.status}
                </span>

              </p>
              <p className="text-sm text-gray-600">
                {filing.client} | {filing.type}
              </p>
            </div>
            <span className="text-sm text-gray-500">{filing.date}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}