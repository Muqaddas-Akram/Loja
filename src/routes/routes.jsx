import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Clothes from '../pages/Clothes/Clothes';
import Accessories from '../pages/Accessories/Accessories';
import Appliances from '../pages/Appliances/Appliances';
import Products from '../pages/Products/Products';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AppRoutes() {
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';
  const isAboutPage = location.pathname === '/about';

  return (
    <>
      {!isProductsPage && <Header />}
      {!isAboutPage && !isProductsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/products" element={<Products />} />
      </Routes>
       <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
