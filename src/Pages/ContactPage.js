import React from 'react'

function ContactPage() {
  return (
    <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us through the following platforms:</p>
        <div className="social-icons">
            <a href="https://www.facebook.com/YourProfile" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://wa.me/YourNumber" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/48/000000/whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="https://t.me/YourUsername" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/48/000000/telegram-app.png" alt="Telegram" />
            </a>
            <a href="https://twitter.com/YourUsername" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
            </a>
        </div>
    </div>
);
}

export default ContactPage