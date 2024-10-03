import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white px-4 py-4 md:px-10 lg:px-20 flex justify-between items-center border-t-2 border-b-4 border-black">
      {/* Hamburger menu icon for small screens */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Center the links on large screens */}
      <ul
        className={`${
          isOpen ? 'block mt-48' : 'hidden'
        } md:flex md:space-x-6 text-black font-bold absolute md:relative top-16 left-0 right-0 bg-white md:bg-transparent md:top-auto transition-all md:transition-none z-10 px-4 md:px-0 md:justify-center w-full`}
      >
        <Link to='/'><li className="py-2 md:py-0">HOME</li></Link>
        <Link to='clothes'><li className="py-2 md:py-0">CLOTHES</li></Link>
        <Link to='accessories'><li className="py-2 md:py-0">ACCESSORIES</li></Link>
        <Link to='appliances'><li className="py-2 md:py-0">APPLIANCES</li></Link>
        <Link to='products'><li className="py-2 md:py-0">LOJA PRODUCTS</li></Link>
        <Link to='about'><li className="py-2 md:py-0">ABOUT US</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
