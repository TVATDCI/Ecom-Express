import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotEmail = () => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Check your phone for a recovery email.");
    setTimeout(() => {
        navigate("/login");
    }, 5000);
  };
  return (
    <div className="glass-panel w-[95%] sm:w-[85%] max-w-[600px] p-4 sm:p-6 md:p-8 mx-auto mt-48 sm:mt-56 md:mt-40 text-center">
      <h2 className="text-[#edc561] text-2xl sm:text-3xl font-bold mb-4">Forgot Email</h2>
      <p className="text-red-600 mb-4 text-sm sm:text-base">Enter your phone number to recover your email address.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full p-2 sm:p-2.5 my-2 sm:my-2.5 border border-[#ddd] rounded-lg text-sm sm:text-base box-border transition-all duration-300 hover:bg-[#EDC561] hover:text-[#edc561] hover:font-bold focus:outline-none"
        />
        <button 
          type="submit"
          className="w-full p-2 sm:p-3 bg-[#edc561] text-white font-bold border-none rounded-lg text-sm sm:text-base cursor-pointer box-border mt-2 sm:mt-2.5 transition-all duration-300 focus:bg-white focus:text-[#edc561] focus:font-bold"
        >
          Recover Email
        </button>
      </form>
      {message && <p className="mt-4 text-white text-sm sm:text-base">{message}</p>}
    </div>
  );
};
export default ForgotEmail;
