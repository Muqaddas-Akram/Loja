

import React from "react";
import { Wifi, Camera, Battery, Smartphone, ShoppingCart } from "lucide-react";

const CategoryCard = ({ title, imageUrl, buttonText }) => (
  <div className="relative overflow-hidden group">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center sm:items-start sm:p-3 md:p-4 lg:p-5 text-white  lg:-mb-40">
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">{title}</h2>
      <button className="bg-[#c08c6a] text-white px-3 py-1 sm:px-4 sm:py-2 hover:bg-opacity-80 transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  </div>
);

const Appliances = () => {
  const products = [
    {
      id: 1,
      name: "Cigarette",
      price: "99$",
      image: "src/assets/Images/A1.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: "89$",
      image: "src/assets/Images/A3.jpg",
    },
    {
      id: 3,
      name: "Bicycle",
      price: "79$",
      image: "src/assets/Images/A4.jpg",
    },
    {
      id: 4,
      name: "Fridge",
      price: "99$",
      image: "src/assets/Images/A5.jpg",
    },
    {
      id: 5,
      name: "Oven",
      price: "89$",
      image: "src/assets/Images/A6.jpg",
    },
    {
      id: 6,
      name: "Music",
      price: "79$",
      image: "src/assets/Images/A7.jpg",
    },
  ];
  const categories = [
    {
      title: "HOME APPLIANCES",
      imageUrl: "src/assets/Images/A2.jpg",
      buttonText: "LEARN MORE",
    },
    {
      title: "OFFICE APPLIANCES",
      imageUrl: "src/assets/Images/A2.jpg",
      buttonText: "LEARN MORE",
    },
    {
      title: "SMART PHONES",
      imageUrl: "src/assets/Images/A2.jpg",
      buttonText: "LEARN MORE",
    },
  ];
  return (
    <>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="p-4 text-center">
            <img
              src={product.image}
              alt={`Related product ${product.id}`}
              className="w-full mb-2"
            />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-black font-semibold">{product.name}</p>
                <p className="text-[#c08c6a] font-bold mb-2">{product.price}</p>
              </div>
              <button className="bg-white border border-black px-2 py-1 rounded-lg flex items-center">
                ADD TO CART
                <ShoppingCart className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-10 mt-6">
        <button className="bg-[#c08c6a] text-center text-white px-6 uppercase py-3 sm:px-4 sm:py-2 hover:bg-opacity-80 transition-colors duration-300">
          Show more
        </button>
      </div>

      {/* Banner */}
      <div className="bg-[#c08c6a] text-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Left side content */}
        <div className="z-10 mb-4 md:mb-0 md:mr-4">
          {" "}
          {/* Adjusted margins to reduce gap */}
          <h1 className="text-4xl text-[#d2a4a4] md:text-5xl lg:text-8xl font-bold mb-2">
            Exclusive
            <br />
            Phone
          </h1>
          <div className="w-16 h-1 bg-white mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-8xl font-bold mb-2 text-black">
            SALE
          </h2>
          <p className="text-xl lg:text-3xl mb-4">UPTO 20% OFF</p>
          <button className="bg-[#d2a4a4] text-black font-bold px-10 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300">
            Shop Now
          </button>
        </div>

        {/* Right side content (phone image) */}
        <div className=" lg:w-1/2 relative">
          <img
            src="src/assets/Images/Iphone.png"
            alt="Smartphone"
            className="w-full sm:w-80 md:w-96 lg:w-[30rem] object-contain transform -rotate-12"
          />
          {/* Sparkles */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <Wifi className="absolute top-1/4 left-1/4 w-12 h-12" />
          <Camera className="absolute top-1/2 right-1/4 w-12 h-12" />
          <Battery className="absolute bottom-1/4 left-1/3 w-12 h-12" />
          <Smartphone className="absolute top-1/3 right-1/3 w-12 h-12" />
        </div>

        {/* Abstract lines */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <div className="w-full h-1 bg-white transform -rotate-3 mb-4"></div>
          <div className="w-full h-1 bg-white transform rotate-3 mb-4"></div>
          <div className="w-full h-1 bg-white transform -rotate-3"></div>
        </div>
      </div>

      {/* 3cards */}
      <div className="container mx-auto px-4 mt-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Appliances;

