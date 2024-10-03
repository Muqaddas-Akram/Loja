import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Top header section */}
      <header className="bg-[#c08c6a] px-4 py-3 md:px-10 lg:px-20 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-5 md:gap-10 flex-wrap">
          <button className="text-white text-sm md:text-xl">COUNTRY ▼</button>
          <button className="text-white text-sm md:text-xl">FREE DELIVERY</button>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <FaInstagram className="text-white text-2xl md:text-3xl" />
          <FaFacebook className="text-white text-2xl md:text-3xl" />
        </div>
      </header>

      {/* Main header section */}
      <div className="flex flex-col sm:flex-row px-4 py-3 md:px-10 lg:px-20 justify-between items-center">
        {/* Contact button */}
        <button className="text-black text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-0">Contact us</button>

        {/* Logo */}
        <a href="/">
          <img
            src="src/assets/Images/logo.png"
            alt="Loja Logo"
            className="w-28 sm:w-32 md:w-40 lg:w-48"
          />
        </a>

        {/* Login/Register */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-3 sm:mt-0">
          <a href="#" className="text-black text-xl sm:text-2xl lg:text-3xl">
            LOGIN
          </a>
          <span className="text-black text-xl sm:text-2xl lg:text-3xl">/</span>
          <a href="#" className="text-black text-xl sm:text-2xl lg:text-3xl">
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
