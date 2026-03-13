import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-back-to-top">
        <h2>
          <a href="#top" className="footer-back-to-top-link" aria-label="Back to top of the page">
            Back to Top ↑
          </a>
        </h2>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title">About Us</h3>
          <p className="footer-section-text">
            We are dedicated to providing high-quality service and support for
            all our clients.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-section-list">
            <li>
              <a href="#" aria-label="Go to home section">
                Home
              </a>
            </li>
            <li>
              <a href="#about" aria-label="Learn more about us">
                About
              </a>
            </li>
            <li>
              <a aria-label="Explore our services">Services</a>
            </li>
            <li>
              <a href="#" aria-label="Contact us">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact Us</h3>
          <p>
            <a
              href="mailto:info@example.com"
              aria-label="Email us at info@example.com"
            >
              Email: info@example.com
            </a>
          </p>
          <p>
            <a href="tel:+1234567890" aria-label="Call us at +123 456 7890">
              Phone: +123 456 7890
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" className="footer-social-icon" aria-label="Visit our Facebook page">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="footer-social-icon" aria-label="Visit our Twitter page">
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="footer-social-icon"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="footer-social-icon" aria-label="Visit our LinkedIn page">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 React Rocket Developers | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
