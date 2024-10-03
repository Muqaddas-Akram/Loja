import React from "react";
import { ShoppingCart } from "lucide-react";

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

function Clothes() {
  const products = [
    {
      id: 1,
      name: "T-SHIRT A",
      price: "99$",
      image: "src/assets/Images/image7.jpg",
    },
    {
      id: 2,
      name: "T-SHIRT B",
      price: "89$",
      image: "src/assets/Images/image5.jpg",
    },
    {
      id: 3,
      name: "T-SHIRT C",
      price: "79$",
      image: "src/assets/Images/image3.jpg",
    },
    {
      id: 4,
      name: "T-SHIRT D",
      price: "99$",
      image: "src/assets/Images/image4.jpg",
    },
    {
      id: 5,
      name: "T-SHIRT E",
      price: "89$",
      image: "src/assets/Images/image6.jpg",
    },
    {
      id: 6,
      name: "T-SHIRT F",
      price: "79$",
      image: "src/assets/Images/image2.jpg",
    },
  ];
  const categories = [
    {
      title: "T-SHIRT",
      imageUrl: "src/assets/Images/image1.jpg",
      buttonText: "LEARN MORE",
    },
    {
      title: "T-SHIRT",
      imageUrl: "src/assets/Images/image1.jpg",
      buttonText: "LEARN MORE",
    },
    {
      title: "T-SHIRT",
      imageUrl: "src/assets/Images/image1.jpg",
      buttonText: "LEARN MORE",
    },
  ];
  return (
    <>
      {/* hero */}
      <div className="relative w-full h-screen bg-[#e0c5a5] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="src/assets/Images/hero.jpg"
            alt="Fashionable woman"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute bottom-8 left-8 right-8 flex justify-center items-center">
          <button className="bg-[#c08c6a] text-white px-3 py-1 sm:px-4 sm:py-2 hover:bg-opacity-80 transition-colors duration-300">
            SHOP NOW
          </button>
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

      {/* bannar */}
      <div className="relative w-full h-screen bg-[#e8d8ce] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="src/assets/Images/bigsale.jpg"
            alt="Models"
            className="object-cover lg:w-full lg:h-full md:w-full md:h-full w-96 h-96"
          />
        </div>
        <div className="relative z-10 text-center p-4">
          <p className="text-sm md:text-base lg:text-lg text-white mb-2">
            Special Sale for Spring Season
          </p>
          <div className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-4 relative z-0">
              BIG SALE
            </h1>
            <div className="absolute inset-0 flex items-center overflow-hidden z-20">
              <p className="whitespace-nowrap text-xs text-white animate-marquee bg-[#cfc2ba] px-2 py-1 mt-5">
                BIG SALE - BIG SALE - BIG SALE - BIG SALE - BIG SALE - BIG SALE
                - BIG SALE - BIG SALE - BIG SALE
              </p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            GET 50% OFF
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white">
            ENJOY DISCOUNT & SHOP HAPPILY
          </p>
        </div>
        <div className="absolute inset-0 border-8 border-[#e8d8ce] pointer-events-none"></div>
      </div>
    </>
  );
}

export default Clothes;
