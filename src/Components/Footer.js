// Footer.js
import React from 'react';
import './Footer.css'; // Assuming you are using CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Programs</h3>
          <ul>
            <li>Corporate</li>
            <li>One to One</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Service</h3>
          <ul>
            <li>Training</li>
            <li>Coaching</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="https://wa.me/"><i className="fab fa-whatsapp"></i></a>
            <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          </div>
          <p>Mobile: +917892474250</p>
          <p>Email: E-commerce@yahoo.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 E-commerce.com</p>
        <ul>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Cancellation & Refund Policy</li>
          <li>Shipping & Delivery Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
