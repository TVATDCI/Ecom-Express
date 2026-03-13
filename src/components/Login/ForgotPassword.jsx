import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setMessage('Check your email for a password reset link.')
    const timer = setTimeout(() => {
        navigate('/login')
      }
      , 5000)
      return () => {
        clearTimeout(timer)
    }
  }

  return (
    <div className="glass-panel w-[85%] sm:w-[90%] max-w-[600px] p-5 sm:p-7 md:p-8 mx-auto mt-36 sm:mt-48 md:mt-40 text-center">
      <h2 className="text-[#edc561] text-2xl sm:text-3xl font-bold mb-4">Forgot Password</h2>
      <p className="text-red-600 mb-4">Enter your email to receive a password reset link.</p>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2.5 sm:p-3 my-2.5 border border-[#ddd] rounded-lg text-sm sm:text-base box-border transition-all duration-300 focus:text-[#edc561] focus:outline focus:outline-3 focus:outline-[#a46b38] focus:font-bold"
          />
          <button 
            type="submit"
            className="w-full p-2.5 sm:p-3 bg-[#edc561] text-white border-none rounded-lg text-sm sm:text-base cursor-pointer box-border transition-all duration-300 hover:bg-white hover:text-[#edc561] hover:font-bold"
          >
            Send Reset Link
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-white">{message}</p>}
    </div>
  );
};
export default ForgotPassword;
