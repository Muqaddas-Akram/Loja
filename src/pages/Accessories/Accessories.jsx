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

const Accessories = () => {
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
      <div className="bg-[#c08c6a] min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full bg-[#c08c6a] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* 1st Column: Dots and Clothes Rack Image */}
            <div className="md:w-1/3 p-6 flex flex-col items-center">
              <div className="relative w-full">
                {/* Dots Container */}
                <div className="absolute top-0 left-0 w-full h-full z-10">
                  <div className="grid grid-cols-12 gap-2">
                    {[...Array(120)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-white rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Image Container */}
                <div className="relative z-20 mt-4">
                  <img
                    src="src/assets/Images/rack.png"
                    alt="Clothes rack"
                    className="w-full h-80"
                  />
                </div>
              </div>
            </div>

            {/* 2nd Column: P Tag and Model Image */}
            <div className="md:w-1/3 p-6 flex flex-col items-center justify-center">
              <p className="text-black text-left text-3xl">
                Style up and save big! Buy one, get cashback - limited time
                only, shop now and stay fabulous!
              </p>
              <div className="relative w-full">
                {/* Dots Container */}
                <div className="absolute top-28 left-10 w-full h-full z-10">
                  <div className="grid grid-cols-12 gap-2">
                    {[...Array(85)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-white rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Image Container */}
                <div className="relative z-20 mt-20">
                  <img
                    src="src/assets/Images/model.png"
                    alt="Model"
                    className="w-52 h-44 object-cover shadow-md shadow-black"
                  />
                </div>
              </div>
            </div>

            {/* 3rd Column: H2, H3, and Button */}
            <div className="md:w-1/3 p-6 flex flex-col uppercase">
              <h1 className="text-6xl font-light text-[#d2a4a4] text-right">
                FASHION SALE
              </h1>
              <h3 className="text-6xl font-light text-[#d2a4a4] mt-20 text-right">
                NEW
              </h3>
              <h3 className="text-3xl font-light text-[#d2a4a4] text-right">
                Collection
              </h3>
              <button className="mt-20 bg-black text-white py-2 px-4 rounded flex items-center justify-center ml-auto hover:bg-gray-800 transition duration-300">
                SHOP NOW
              </button>
            </div>
          </div>
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

export default Accessories;
