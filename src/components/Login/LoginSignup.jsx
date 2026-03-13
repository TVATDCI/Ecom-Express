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
    <div className="glass-panel w-[90%] max-[375px]:w-full min-[376px]:max-w-[500px] p-7 sm:p-8 mx-auto mt-36 sm:mt-[150px] text-center flex flex-col justify-center items-center">
      <h2 className="text-[34px] max-[760px]:text-[26px] max-[375px]:text-[22px] text-[#eaa504] mb-5 max-[760px]:mb-[18px] max-[375px]:mb-[16px] font-semibold">{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <div className="relative w-full mt-2.5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleInputChange}
            required
            className="w-full py-3 pr-10 pl-3 border-2 border-white rounded-lg text-[16px] max-[375px]:text-[14px] outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
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
                className="w-full py-3 pr-10 pl-3 border-2 border-white rounded-lg text-[16px] max-[375px]:text-[14px] outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
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
                className="w-full py-3 pr-10 pl-3 border-2 border-white rounded-lg text-[16px] max-[375px]:text-[14px] outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
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
            className="w-full py-3 pr-10 pl-3 border-2 border-white rounded-lg text-[16px] max-[375px]:text-[14px] outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
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
              className="w-full py-3 pr-10 pl-3 border-2 border-white rounded-lg text-[16px] max-[375px]:text-[14px] outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_5px_rgba(74,144,226,0.5)] focus:outline-[#edc561] focus:bg-white"
            />
            <span onClick={togglePasswordVisibility} className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-[#555]">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        )}
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <button type="submit" className="w-full py-3 mt-5 max-[375px]:mt-[15px] bg-[rgb(237,197,97)] text-white border-none rounded-lg text-[16px] max-[375px]:text-[14px] font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:text-[rgb(237,197,97)] hover:border-red-600 hover:border-2 box-border">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <p onClick={() => navigate("/forgot-password")} className="mt-2.5 text-[14px] max-[375px]:text-[12px] text-red-600 cursor-pointer underline hover:text-[#357abd]">
        Forgot Password?
      </p>
      <p onClick={() => navigate("/forgot-email")} className="mt-2.5 text-[14px] max-[375px]:text-[12px] text-red-600 cursor-pointer underline hover:text-[#357abd]">
        Forgot Email?
      </p>
      <p className="w-full text-center text-[16px] max-[375px]:text-[12px] text-[#eec661] mt-2.5">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={toggleForm}
          className="text-[#eec661] cursor-pointer bg-none border-none text-[16px] font-bold ml-1"
        >
          {isLogin ? " Sign up" : " Log in"}
        </button>
      </p>
      <p
        onClick={() => navigate("/")}
        className="text-[#eec661] cursor-pointer underline mt-2 text-[16px] font-semibold"
      >
        Back to the Home
      </p>
    </div>
  );
};
export default LoginSignup;
