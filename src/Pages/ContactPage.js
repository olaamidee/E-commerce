import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactPage() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p className="contact-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum eius nesciunt ratione veritatis ipsa ut, suscipit, nihil quod at a voluptatem quas dicta enim maiores incidunt voluptatum neque atque possimus veniam, illum asperiores aut? Repellendus, voluptas ad. Fuga, necessitatibus aperiam! Sed, eos! Sunt explicabo ratione facilis, officiis quam magni.
                </p>
            </div>

            <div className="contact-content">
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required className="input-field" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required className="input-field" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required className="textarea-field" />

                    <input type="submit" value="Submit" className="submit-button" />
                </form>

                <div className="socials-icons">
                    <a href="https://wa.me/" aria-label="WhatsApp" className="icon whatsapp"><FaWhatsapp /></a>
                    <a href="https://facebook.com" aria-label="Facebook" className="icon facebook"><FaFacebook /></a>
                    <a href="https://youtube.com" aria-label="YouTube" className="icon youtube"><FaYoutube /></a>
                    <a href="https://instagram.com" aria-label="Instagram" className="icon instagram"><FaInstagram /></a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="icon linkedin"><FaLinkedin /></a>
                    <a href="https://twitter.com" aria-label="Twitter" className="icon twitter"><FaTwitter /></a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
