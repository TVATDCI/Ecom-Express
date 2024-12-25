import { useState } from "react";
import Logo from "../../assets/logo2.png";
import { ImCart } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? "x" : "☰"}
      </div>
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a onClick={() => navigate('/')} className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a onClick={()=> navigate('/about')} className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a onClick={()=> navigate('/products')}className="nav-link">
             Products
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <a  onClick={() =>navigate('/login') } className="nav-link">
          <FaCircleUser />
        </a>
        <a onClick={() =>navigate('/cart') } className="nav-link">
          <ImCart />
        </a>
      </div>
    </header>
  );
};
export default Header;






