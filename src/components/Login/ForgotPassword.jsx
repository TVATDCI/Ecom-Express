import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setMessage("Check your email for a password reset link.");
      setIsLoading(false);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <h2 className="login-title">Forgot Password</h2>
        <p className="login-subtitle">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
              disabled={isLoading}
            />
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <p className="login-message login-message-success">{message}</p>
        )}

        <div className="login-back-link text-center">
          <button
            onClick={() => navigate("/login")}
            className="login-form-footer-link"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
