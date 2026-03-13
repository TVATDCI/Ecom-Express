import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    navigate("/");
    console.log(isLogin ? "Logging in..." : "Registering...", formValues);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="glass-panel w-[90%] max-w-md p-5 sm:p-7 md:p-8 mx-auto mt-24 sm:mt-32 md:mt-40 text-center flex flex-col justify-center items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#eaa504] mb-4 sm:mb-5">{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <div className="relative w-full mt-2.5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleInputChange}
            required
            className="w-full py-2.5 sm:py-3 pr-10 pl-3 border-2 border-white rounded-lg text-sm sm:text-base outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
          />
        </div>
        {!isLogin && (
          <>
            <div className="relative w-full mt-2.5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formValues.fullName}
                onChange={handleInputChange}
                required
                className="w-full py-2.5 sm:py-3 pr-10 pl-3 border-2 border-white rounded-lg text-sm sm:text-base outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
              />
            </div>
            <div className="relative w-full mt-2.5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                className="w-full py-2.5 sm:py-3 pr-10 pl-3 border-2 border-white rounded-lg text-sm sm:text-base outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
              />
            </div>
          </>
        )}
        <div className="relative w-full mt-2.5">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleInputChange}
            required
            className="w-full py-2.5 sm:py-3 pr-10 pl-3 border-2 border-white rounded-lg text-sm sm:text-base outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
          />
          <span onClick={togglePasswordVisibility} className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-[#555]">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {!isLogin && (
          <div className="relative w-full mt-2.5">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full py-2.5 sm:py-3 pr-10 pl-3 border-2 border-white rounded-lg text-sm sm:text-base outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
            />
            <span onClick={togglePasswordVisibility} className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-[#555]">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        )}
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <button type="submit" className="w-full py-2.5 sm:py-3 mt-4 sm:mt-5 bg-[#edc561] text-white border-none rounded-lg text-sm sm:text-base font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#edc561] hover:border-red-600">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <p onClick={() => navigate("/forgot-password")} className="mt-2.5 text-xs sm:text-sm text-red-600 cursor-pointer underline hover:text-[#357abd]">
        Forgot Password?
      </p>
      <p onClick={() => navigate("/forgot-email")} className="mt-2.5 text-xs sm:text-sm text-red-600 cursor-pointer underline hover:text-[#357abd]">
        Forgot Email?
      </p>
      <p className="w-full text-center text-xs sm:text-base text-[#eec661] mt-2.5">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={toggleForm}
          className="text-[#eec661] cursor-pointer bg-none border-none text-xs sm:text-base font-bold ml-1"
        >
          {isLogin ? " Sign up" : " Log in"}
        </button>
      </p>
      <p
        onClick={() => navigate("/")}
        className="text-[#eec661] cursor-pointer underline mt-2 text-sm sm:text-base"
      >
        Back to the Home
      </p>
    </div>
  );
};
export default LoginSignup;
