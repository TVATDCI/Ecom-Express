import { useState } from "react";
import Logo from "../../assets/logo2.png";
import { ImCart } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header-container">
      <div className="flex items-center">
        <img 
          src={Logo} 
          alt="logo" 
          className="header-logo" 
          onClick={() => navigate("/")}
        />
      </div>
      
      <div className="header-menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </div>

      <nav className={`${menuOpen ? "header-nav-mobile" : "header-nav"}`}>
        <ul className="flex flex-col md:flex-row list-none m-0 p-0 w-full md:w-auto items-center gap-2 md:gap-0">
          <li className="w-full md:w-auto text-center">
            <a 
              onClick={() => { navigate("/"); setMenuOpen(false); }} 
              className="header-nav-link"
            >
              Home
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a 
              onClick={() => { navigate("/about"); setMenuOpen(false); }} 
              className="header-nav-link"
            >
              About
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a 
              onClick={() => { navigate("/products"); setMenuOpen(false); }} 
              className="header-nav-link"
            >
              Products
            </a>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <a onClick={() => navigate("/login")} className="header-icon">
          <FaCircleUser />
        </a>
        <a onClick={() => navigate("/cart")} className="header-icon">
          <ImCart />
        </a>
      </div>
    </header>
  );
};

export default Header;
