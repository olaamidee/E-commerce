import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';
import CartPage from './Pages/CartPage';
import Footer from './Components/Footer.js';
import { CartProvider } from '../src/Components/CartContext';  // Import CartProvider

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/products" element={<ProductPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
