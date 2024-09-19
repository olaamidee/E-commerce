import React from 'react';
import './Header.css'; // Importing CSS file

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">Welcome to My E-commerce Website!</h1>
      <p className="header-description">
        Here, you'll find everything you need to buy, sell, or trade products.
      </p>
      <p className="header-info">
        Feel free to explore our catalog, browse our latest products, or sign up for a free account.
      </p>
      <form className="header-form">
        <input className="header-input" type="text" placeholder="Search for products..." />
        <button className="header-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
