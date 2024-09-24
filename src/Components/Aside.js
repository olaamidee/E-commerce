import React from 'react';
import { FiGrid, FiWatch, FiShoppingBag, FiMonitor, FiHome } from 'react-icons/fi';
import { MdOutlineFitnessCenter, MdOutlineChair } from 'react-icons/md';
import { FaTshirt, FaCouch } from 'react-icons/fa';
import './Aside.css';

function Aside() {
  return (
    <div className="aside-container">
      <h1 className="title"><FiGrid className="icon" /> All Categories</h1>
      <h1 className="item"><FiWatch className="icon" /> Accessories</h1>
      <h1 className="item"><FiShoppingBag className="icon" /> Footwear</h1>
      <h1 className="item"><FaTshirt className="icon" /> Clothing</h1>
      <h1 className="item"><FiMonitor className="icon" /> Electronics</h1>
      <h1 className="item"><FiHome className="icon" /> Home Appliances</h1>
      <h1 className="item"><FaCouch className="icon" /> Home Decor</h1>
      <h1 className="item"><MdOutlineFitnessCenter className="icon" /> Fitness</h1>
      <h1 className="item"><MdOutlineChair className="icon" /> Furniture</h1>
    </div>
  );
}

export default Aside;
