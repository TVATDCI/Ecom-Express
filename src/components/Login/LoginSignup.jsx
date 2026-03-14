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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
    });
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

    if (!formValues.username || !formValues.password) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
      console.log(isLogin ? "Logging in..." : "Registering...", formValues);
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <h2 className="login-title">{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Username */}
          <div className="login-form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleInputChange}
              required
              className="login-input"
              disabled={isLoading}
            />
          </div>

          {/* Full Name (Signup only) */}
          {!isLogin && (
            <div className="login-form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formValues.fullName}
                onChange={handleInputChange}
                required
                className="login-input"
                disabled={isLoading}
              />
            </div>
          )}

          {/* Email (Signup only) */}
          {!isLogin && (
            <div className="login-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                className="login-input"
                disabled={isLoading}
              />
            </div>
          )}

          {/* Password */}
          <div className="login-form-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleInputChange}
              required
              className="login-input"
              disabled={isLoading}
            />
            <span
              onClick={togglePasswordVisibility}
              className="login-password-toggle"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password (Signup only) */}
          {!isLogin && (
            <div className="login-form-group">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                required
                className="login-input"
                disabled={isLoading}
              />
              <span
                onClick={togglePasswordVisibility}
                className="login-password-toggle"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p className="login-message login-message-error">{error}</p>
          )}

          {/* Submit Button */}
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider" />

        {/* Additional Links */}
        <div className="text-center">
          <p
            onClick={() => navigate("/forgot-password")}
            className="login-link"
          >
            Forgot Password?
          </p>
          <p onClick={() => navigate("/forgot-email")} className="login-link">
            Forgot Email?
          </p>
        </div>

        {/* Toggle Login/Signup */}
        <div className="login-form-footer">
          <p className="login-form-footer-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={toggleForm}
              className="login-button-secondary"
              type="button"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="login-back-link"
            type="button"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
