import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customBrokerIcon from '../assets/custom-broker.svg';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password || !email.includes("@")) {
      setError("Please enter a valid email and password.");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">

      <div className="bg-white p-8 rounded-3xl shadow-xl/50 w-full max-h-[400px] max-w-sm min-h-[500px] flex flex-col justify-center transform transition-all duration-300 hover:scale-105">

        <div className="flex flex-row gap-2 m-2 ">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg  w-20 h-18 justify-center items-center">
          <img src={customBrokerIcon} alt="Custom Broker Logo" className="h-12 w-12 justify-center items-center" />
        </div >
        <>
          <h2 div className="text-3xl font-bold flex-nowrap text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent " >Customs Broker Portal</h2>
        </>
        </div>
        <div className=" justify-items-center ">
          <p className="text-gray-500 text-sm m-3 flex gap-1.5 text-center">Sign in to manage your customs filings and clients</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">

          <input 
          className="w-full border rounded p-2" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />

          <input
          type= "password" 
          className="w-full border rounded p-2" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">Log In</button>
        </form>
      </div>
    </div>
  );
}
