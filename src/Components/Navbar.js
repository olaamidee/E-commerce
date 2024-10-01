import React, {useState, useContext } from 'react';
import { FaCartPlus, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';  // Import CartContext

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);  // Use CartContext

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HomePage = () => {
    navigate('/');
  };

  const AboutPage = () => {
    navigate('/about');
  };

  const ProductPage = () => {
    navigate('/products');
  };

  const ContactPage = () => {
    navigate('/contact');
  };

  const CartPage = () => {
    navigate('/cart');
  };

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">E-Commerce Store</h1>
      <div className="navbar-menu-container">
        <button className="navbar-hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item" onClick={HomePage}>Home</li>
          <li className="navbar-item" onClick={AboutPage}>About</li>
          <li className="navbar-item" onClick={ProductPage}>Products</li>
          <li className="navbar-item" onClick={ContactPage}>Contact</li>
        </ul>
      </div>
      <div className="navbar-cart" onClick={CartPage}>
        <h2 className="navbar-cart-icon"><FaCartPlus /></h2>
        <p className="navbar-cart-text">Total items: {cartItems.length}</p>  {/* Show total items */}
      </div>
    </div>
  );
}

export default Navbar;
