import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 2-2 2-2 2 .896 2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mt-4">Customs Broker Portal</h2>
          <p className="text-gray-500 text-sm">Sign in to manage your customs filings and clients</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input className="w-full border rounded p-2" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="w-full border rounded p-2" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Sign In</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">Demo credentials: any email and password</p>
      </div>
    </div>
  );
}
