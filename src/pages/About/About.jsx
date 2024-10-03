import { useState } from "react";
import { ShoppingCart } from "lucide-react";

function About() {
  const [activeSection, setActiveSection] = useState("terms");

  const products = [
    {
      id: 1,
      name: "T-SHIRT A",
      price: "99$",
      image: "src/assets/Images/image3.jpg",
    },
    {
      id: 2,
      name: "T-SHIRT B",
      price: "89$",
      image: "src/assets/Images/image2.jpg",
    },
    {
      id: 3,
      name: "T-SHIRT C",
      price: "79$",
      image: "src/assets/Images/image4.jpg",
    },
  ];

  const images = [
    "src/assets/Images/image2.jpg",
    "src/assets/Images/image3.jpg",
    "src/assets/Images/image4.jpg",
    "src/assets/Images/image1.jpg",
  ];
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center mb-14">
          <h1 className="text-2xl font-bold inline-block bg-[#c08c6a] text-white py-2 px-12">
            KAFTAN FASHION
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <img
              src="src/assets/Images/image1.jpg"
              alt="Kaftan"
              className="w-full"
            />
            <div className="flex justify-between">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src="src/assets/Images/image1.jpg"
                  alt={`Kaftan view ${i}`}
                  className="w-1/4"
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#c08c6a] mt-4 mb-10">
              KAFTAN FASHION
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </p>
            <div className="flex items-center mt-12">
              <p className="text-2xl text-[#c08c6a] mr-20">99$</p>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center bg-white border border-black px-4 py-2 rounded-lg">
                  ADD TO CART
                </button>
                <button className="flex items-center justify-center bg-[#c08c6a] text-white px-4 py-2 rounded-lg">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 px-4">
          <div className="flex flex-col sm:flex-row sm:justify-center">
            <button
              className={`text-2xl sm:text-3xl py-2 px-4 border-b-2 sm:border-b-0 sm:border-r-2 border-black ${
                activeSection === "terms" ? "font-bold" : ""
              }`}
              onClick={() => setActiveSection("terms")}
            >
              TERMS & CONDITION
            </button>
            <button
              className={`text-2xl sm:text-3xl py-2 px-4 ${
                activeSection === "reviews" ? "font-bold" : ""
              }`}
              onClick={() => setActiveSection("reviews")}
            >
              REVIEWS STOCKS
            </button>
          </div>

          {activeSection === "terms" && (
            <p className="mt-4 text-lg sm:text-base lg:w-1/2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </p>
          )}

          {activeSection === "reviews" && (
            <p className="mt-4 text-lg sm:text-base lg:w-1/2 text-justify">
              Here are the reviews about stocks. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </p>
          )}
        </div>
        {/* Cards */}
        <h2 className="text-5xl font-bold text-[#c08c6a] my-20 text-center">
          RELATED PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
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
                  <p className="text-[#c08c6a] font-bold mb-2">
                    {product.price}
                  </p>
                </div>
                <button className="bg-white border border-black px-2 py-1 rounded-lg flex items-center">
                  ADD TO CART
                  <ShoppingCart className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative max-w-full overflow-hidden p-4" // Adding padding to the main div
          style={{ backgroundColor: "#c08c6a" }}
        >
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-1/4 flex-shrink-0 p-2" // Adding padding to each image container
              >
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[#c08c6a] bg-opacity-40 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                OUR COMPLETE STORE WILL BE LIVE VERY SOON        WITH ALL PRODUCTS!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
