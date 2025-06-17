import Sidebar from "../Components/Sidebar";

export default function Filings() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div class="flex flex-col items-center justify-center w-full p-4 text-center flex-1 bg-gray-50 ml-18">

        <h1 className="text-2xl text-center justify-center md:text-3xl font-black">
          🚧 Filing Under Construction 🚧
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
}
