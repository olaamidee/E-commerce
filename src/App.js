import React from'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/products" element={<ProductPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
          <Route exact path="/cart" element={<CartPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
