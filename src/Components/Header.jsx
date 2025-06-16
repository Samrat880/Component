export default function Header() {
    return (
      <div className="flex justify-between items-center mb-3 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl ">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <button className="text-sm font-bold text-black flex justify-between  bg-red-500 rounded-2xl p-1 ">Log-out</button>
      </div>
 )
}
  