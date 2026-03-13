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
    <header className="flex justify-between items-center px-4 py-2 bg-[var(--color-glass-bg)] backdrop-blur-[var(--blur-glass)] border-b border-[var(--color-glass-border)] fixed top-0 w-full z-50 shadow-md h-[70px]">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-12 h-12 md:w-15 md:h-15 rounded-full transition-transform duration-300 hover:scale-110 bg-[#d4af37]" />
      </div>
      
      <div className="md:hidden cursor-pointer text-2xl text-white" onClick={toggleMenu}>
        {menuOpen ? "x" : "☰"}
      </div>

      <nav className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#333] md:bg-transparent p-4 md:p-0 transition-all duration-300`}>
        <ul className="flex flex-col md:flex-row list-none m-0 p-0 w-full md:w-auto">
          <li className="my-2 md:my-0 md:mx-4 text-center">
            <a onClick={() => { navigate("/"); setMenuOpen(false); }} className="text-white text-lg md:text-xl cursor-pointer hover:bg-[#ffd700] hover:text-[#1a1a1a] px-4 py-2 rounded-full transition-colors duration-300">
              Home
            </a>
          </li>
          <li className="my-2 md:my-0 md:mx-4 text-center">
            <a onClick={() => { navigate("/about"); setMenuOpen(false); }} className="text-white text-lg md:text-xl cursor-pointer hover:bg-[#ffd700] hover:text-[#1a1a1a] px-4 py-2 rounded-full transition-colors duration-300">
              About
            </a>
          </li>
          <li className="my-2 md:my-0 md:mx-4 text-center">
            <a onClick={() => { navigate("/products"); setMenuOpen(false); }} className="text-white text-lg md:text-xl cursor-pointer hover:bg-[#ffd700] hover:text-[#1a1a1a] px-4 py-2 rounded-full transition-colors duration-300">
              Products
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <a onClick={() => navigate("/login")} className="ml-4 text-2xl text-white cursor-pointer transition-all duration-300 hover:text-[#d4af37] hover:scale-120">
          <FaCircleUser />
        </a>
        <a onClick={() => navigate("/cart")} className="ml-4 text-2xl text-white cursor-pointer transition-all duration-300 hover:text-[#d4af37] hover:scale-120">
          <ImCart />
        </a>
      </div>
    </header>
  );
};
export default Header;
