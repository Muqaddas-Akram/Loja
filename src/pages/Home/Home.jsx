import React, { useState } from "react";

function Home() {
  const images = [
    {
      src: "src/assets/Images/G1.jpg",
      alt: "Two women in colorful dresses",
      className: "col-span-2 row-span-1",
    },
    {
      src: "src/assets/Images/image3.jpg",
      alt: "Colorful bracelets",
      className: "col-span-1 row-span-1",
    },
    {
      src: "src/assets/Images/image4.jpg",
      alt: "Man in black outfit",
      className: "col-span-1 row-span-2",
    },
    {
      src: "src/assets/Images/image1.jpg",
      alt: "Man in white outfit",
      className: "col-span-1 row-span-1",
    },
    {
      src: "src/assets/Images/men.jpg",
      alt: "Woman with hat",
      className: "col-span-1 row-span-1",
    },
    {
      src: "src/assets/Images/earrings.jpg",
      alt: "Two women in floral dresses",
      className: "col-span-1 row-span-1",
    },
  ];
  const morecategories = [
    { name: "HOME", imgSrc: "src/assets/Images/home.png" },
    { name: "CLOTHES", imgSrc: "src/assets/Images/clothes.png" },
    { name: "ACCESSORIES", imgSrc: "src/assets/Images/accessories.png" },
    { name: "APPLIANCES", imgSrc: "src/assets/Images/appliances.png" },
    { name: "LOJA PRODUCTS", imgSrc: "src/assets/Images/loja product.png" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(Array(3).fill(0));

  const categories = [
    {
      name: "Clothing",
      frontImage: "src/assets/Images/image1.jpg",
      middleImage: "src/assets/Images/G1.jpg",
      backImage: "src/assets/Images/men.jpg",
    },
    {
      name: "Accessories",
      frontImage: "src/assets/Images/image1.jpg",
      middleImage: "src/assets/Images/G1.jpg",
      backImage: "src/assets/Images/men.jpg",
    },
    {
      name: "Loja Products",
      frontImage: "src/assets/Images/image1.jpg",
      middleImage: "src/assets/Images/G1.jpg",
      backImage: "src/assets/Images/men.jpg",
    },
  ];

  // Function to handle image cycling
  const handleImageClick = (index) => {
    setCurrentImageIndex((prevState) => {
      const newState = [...prevState];
      newState[index] = (newState[index] + 1) % 3; // Cycle through 0, 1, 2
      return newState;
    });
  };
  return (
    <>
      {/* Gallery1 */}
      <div className="container mx-auto p-4 max-w-6xl my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large image spanning two rows */}
          <div className="md:row-span-2 md:col-span-1">
            <img
              src="src/assets/Images/image8.jpg"
              alt="outfits"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <img
              src="src/assets/Images/image9.jpg"
              alt="fabric"
              className="w-full h-full object-cover "
            />
          </div>
          <div>
            <img
              src="src/assets/Images/men.jpg"
              alt="outfits"
              className="w-full h-full object-cover "
            />
          </div>
          <div>
            <img
              src="src/assets/Images/image1.jpg"
              alt="fabric"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-20 mt-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 rounded-xl shadow-lg cursor-pointer group mb-8"
            onClick={() => handleImageClick(index)}
          >
            <div
              className="relative w-full h-full rounded-xl transition-transform transform"
              style={{ perspective: "1000px" }}
            >
              <img
                src={
                  currentImageIndex[index] === 0
                    ? category.frontImage
                    : currentImageIndex[index] === 1
                    ? category.middleImage
                    : category.backImage
                }
                alt={category.name}
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  transform: `rotate(${
                    currentImageIndex[index] === 0
                      ? "0deg"
                      : currentImageIndex[index] === 1
                      ? "25deg"
                      : "15deg"
                  }) scale(${index === 2 ? 0.95 : 1})`, // Slight scale on backImage to prevent overlap
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div className="mt-4 text-center text-black text-sm sm:text-base md:text-lg lg:text-xl">
              {category.name}
            </div>
          </div>
        ))}
      </div>

      {/* Gallery2 */}
      <div className="container mt-20">
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
      {/*More Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-center mb-8 mt-8">CATEGORIES</h2>
        <div className="flex flex-wrap justify-center gap-20 mb-16">
          {morecategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img
                src={category.imgSrc}
                alt={category.name}
                className="w-16 h-16 mb-2"
              />
              <span className="text-sm text-center">{category.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <img
            src="src/assets/Images/Sellman.png"
            alt="sellman"
            className="w-auto h-auto mb-6"
          />
          <button className="bg-[#c08c6a] text-white font-semibold py-5 px-6 rounded-xl hover:bg-[#d2a28b] transition-colors duration-300">
            BECOME A SELLER
          </button>
        </div>
      </div>
      {/* banner */}
      <div className="flex flex-col md:flex-row bg-[#cbc8bd] text-black my-14">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center items-center">
          <h2 className="text-4xl md:text-5xl font-light mb-2 ">Casual</h2>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            DAILY STYLE
          </h1>
          <p className="text-xl md:text-2xl text-[#c08c6a] mb-6 font-bold">
            ENJOY UPTO 50% OFF
          </p>
          <button className="bg-[#c08c6a] text-white py-4 font-bold rounded-xl w-44 text-lg hover:bg-[#ae9179] transition-colors duration-300">
            SHOP NOW
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/Images/image10.png"
            alt="Man outfit"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
