import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";


const CategoryCard = ({ title, imageUrl, buttonText }) => (
  <div className="relative overflow-hidden group">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center sm:items-start sm:p-3 md:p-4 lg:p-5 text-white lg:-mb-40">
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">{title}</h2>
      <button className="bg-[#c08c6a] text-white px-3 py-1 sm:px-4 sm:py-2 hover:bg-opacity-80 transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  </div>
);

const MallCard = ({ imageSrc, name }) => (
  <div className="flex flex-col items-center">
    <div className="w-40 h-40 md:w-48 md:h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden mb-4">
      <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className=" text-2xl text-center font-semibold">{name}</h3>
  </div>
);

function Products() {
  const categories = [
    {
      title: "WOMEN'S CLOTHES",
      imageUrl: "src/assets/Images/image1.jpg",
      buttonText: "LEARN MORE",
    },
    {
      title: "MEN'S CLOTHES",
      imageUrl: "src/assets/Images/men.jpg",
      buttonText: "LEARN MORE",
    },
    {
      title: "ACCESSORIES",
      imageUrl: "src/assets/Images/earrings.jpg",
      buttonText: "LEARN MORE",
    },
  ];

  const images = [
    { src: "src/assets/Images/G1.jpg", alt: "Two women in colorful dresses", className: "col-span-2 row-span-1" },
    { src: "src/assets/Images/image3.jpg", alt: "Colorful bracelets", className: "col-span-1 row-span-1" },
    { src: "src/assets/Images/image4.jpg", alt: "Man in black outfit", className: "col-span-1 row-span-2" },
    { src: "src/assets/Images/image1.jpg", alt: "Man in white outfit", className: "col-span-1 row-span-1" },
    { src: "src/assets/Images/men.jpg", alt: "Woman with hat", className: "col-span-1 row-span-1" },
    { src: "src/assets/Images/earrings.jpg", alt: "Two women in floral dresses", className: "col-span-1 row-span-1" },
  ];

  const malls = [
    { name: "SIDDIQUE\nTRADE CENTER", image: "src/assets/Images/B1.jpg" },
    { name: "IMPERIAL MALL", image: "src/assets/Images/B2.jpg" },
    { name: "XINHUA MALL", image: "src/assets/Images/B3.jpg" },
  ];

  return (
    <>
    {/* header */}
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

      {/* Hero */}
      <div className="relative flex items-center justify-center">
        <img
          src="src/assets/Images/logo2.png"
          alt="Hero"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      {/* 3Cards */}
      <div className="container mx-auto px-4 mt-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#c08c6a] text-white px-3 py-1 sm:px-4 sm:py-2 hover:bg-opacity-80 transition-colors duration-300">
            OWN BY LOJA
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className={`${image.className} overflow-hidden`}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mall */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">SELLER ACCOUNT</h1>
          <button className="bg-[#D2A68D] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
            BECOME A SELLER
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
          {malls.map((mall, index) => (
            <MallCard key={index} imageSrc={mall.image} name={mall.name} />
          ))}
        </div>
      </div>
       {/* Banner */}
       <div className="bg-[#c08c6a] min-h-screen flex items-center justify-center p-4 mb-20">
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
    </>
  );
}

export default Products;
