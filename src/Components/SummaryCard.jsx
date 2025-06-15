export default function SummaryCard({ title, value, color }) {
    const colorMap = {
      orange: "bg-orange-100 text-orange-800",
      yellow: "bg-yellow-100 text-yellow-800",
      green: "bg-green-100 text-green-800",
      blue: "bg-blue-100 text-blue-800",
    };
  
    return (
      <div className={`p-4 rounded shadow ${colorMap[color]} text-center`}>
        <p className="text-lg font-bold">{value}</p>
        <p className="text-sm">{title}</p>
      </div>
    );
  }
  