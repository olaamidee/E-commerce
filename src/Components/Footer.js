// Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter} from 'react-icons/fa';

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
                    <a href="https://wa.me/" aria-label="WhatsApp" className="icon whatsapp"><FaWhatsapp /></a>
                    <a href="https://facebook.com" aria-label="Facebook" className="icon facebook"><FaFacebook /></a>
                    <a href="https://youtube.com" aria-label="YouTube" className="icon youtube"><FaYoutube /></a>
                    <a href="https://instagram.com" aria-label="Instagram" className="icon instagram"><FaInstagram /></a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="icon linkedin"><FaLinkedin /></a>
                    <a href="https://twitter.com" aria-label="Twitter" className="icon twitter"><FaTwitter /></a>
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
