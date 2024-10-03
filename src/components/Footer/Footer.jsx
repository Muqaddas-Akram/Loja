import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#c08c6a] text-white py-10 px-5 lg:px-14">
        <div className="text-4xl font-bold text-black mb-8 flex flex-col lg:flex-row justify-between items-center">
            {/* Logo on the left */}
            <img
              src="src/assets/Images/logo.png"
              alt="Loja Logo"
              className="w-32 md:w-40 lg:w-48"
            />
            {/* Icons on the right */}
            <div className="flex gap-4 mt-4 lg:mt-0 lg:ml-auto">
              <FaInstagram className="text-3xl text-white bg-[#d0a890] p-1 rounded-full shadow-lg" />
              <FaFacebook className="text-3xl text-white bg-[#d0a890] p-1 rounded-full shadow-lg" />
              <FaLinkedin className="text-3xl text-white bg-[#d0a890] p-1 rounded-full shadow-lg" />
            </div>
          </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="flex flex-col items-start">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Menu Items */}
            <div>
              <h3 className="text-lg font-bold mb-4">MENU</h3>
              <hr className="w-60 mb-4 h-1 bg-white border-0" />
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* First List */}
                <div>
                  <ul className="space-y-2 uppercase">
                    <Link to='/'><li className="text-white hover:underline cursor-pointer">
                      Home
                    </li></Link>
                    <Link to='about'><li className="text-white hover:underline cursor-pointer">
                      About
                    </li></Link>
                    <Link to='clothes'><li className="text-white hover:underline cursor-pointer">
                      Clothes
                    </li></Link>
                  </ul>
                </div>
                {/* Second List */}
                <div>
                  <ul className="space-y-2 uppercase">
                  <Link to='accessories'><li className="text-white hover:underline cursor-pointer">
                      Accessories
                    </li></Link>
                    <Link to='appliances'><li className="text-white hover:underline cursor-pointer">
                      Appliances
                    </li></Link>
                    <Link to='products'><li className="text-white hover:underline cursor-pointer">
                      Loja Products
                    </li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section - Text and Buttons */}
        <div className="mt-8 lg:mt-0">
          <div className="bg-[#d0a890] px-5 py-8 rounded-3xl shadow-lg">
            <h3 className="font-bold text-xl mb-4">
              LOREM IPSUM SIT AMETERO IRSEO
            </h3>
            <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur
            <br/>adipiscing elit. Mauris sed nulla integer
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                Lorem Ipsum
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                Lorem Ipsum
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Footer Text */}

      <div className="mt-14">
      <hr/>
        <p className="mt-4">&copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
