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
    <header className="flex justify-between items-center px-2.5 sm:px-4 bg-[var(--color-glass-bg)] backdrop-blur-[var(--blur-glass)] border-b border-[var(--color-glass-border)] fixed top-0 w-full z-50 shadow-[0px_4px_8px_rgba(0,0,0,0.3)] h-[60px] max-[320px]:h-[60px] md:h-[70px]">
      <div className="flex items-center">
        <img 
          src={Logo} 
          alt="logo" 
          className="w-10 h-10 min-[375px]:w-12 min-[375px]:h-12 md:w-15 md:h-15 rounded-full transition-transform duration-300 hover:scale-110 bg-[#d4af37]" 
        />
      </div>
      
      <div className="md:hidden cursor-pointer text-2xl text-white mr-2.5" onClick={toggleMenu}>
        {menuOpen ? "x" : "☰"}
      </div>

      <nav className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center absolute md:static top-[60px] md:top-0 left-0 w-full md:w-auto bg-[#333] md:bg-transparent p-2.5 md:p-0 transition-all duration-300`}>
        <ul className="flex flex-col md:flex-row list-none m-0 p-0 w-full md:w-auto items-center">
          <li className="my-2.5 md:my-0 md:mx-4 w-full md:w-auto text-center">
            <a 
              onClick={() => { navigate("/"); setMenuOpen(false); }} 
              className="text-white text-lg md:text-xl cursor-pointer hover:bg-[#ffd700] hover:text-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 block md:inline-block hover:shadow-[0px_4px_10px_rgba(0,0,0,0.3)] active:bg-[rgb(131,5,26)] active:text-white md:hover:bg-[rgb(131,5,26)] md:hover:text-white"
            >
              Home
            </a>
          </li>
          <li className="my-2.5 md:my-0 md:mx-4 w-full md:w-auto text-center">
            <a 
              onClick={() => { navigate("/about"); setMenuOpen(false); }} 
              className="text-white text-lg md:text-xl cursor-pointer hover:bg-[#ffd700] hover:text-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 block md:inline-block hover:shadow-[0px_4px_10px_rgba(0,0,0,0.3)] active:bg-[rgb(131,5,26)] active:text-white md:hover:bg-[rgb(131,5,26)] md:hover:text-white"
            >
              About
            </a>
          </li>
          <li className="my-2.5 md:my-0 md:mx-4 w-full md:w-auto text-center">
            <a 
              onClick={() => { navigate("/products"); setMenuOpen(false); }} 
              className="text-white text-lg md:text-xl cursor-pointer hover:bg-[#ffd700] hover:text-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 block md:inline-block hover:shadow-[0px_4px_10px_rgba(0,0,0,0.3)] active:bg-[rgb(131,5,26)] active:text-white md:hover:bg-[rgb(131,5,26)] md:hover:text-white"
            >
              Products
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center mr-2.5">
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
