import React from 'react';

function AboutPage() {
    return (
        <div className="about-container">
            <section className="about-intro">
                <h1>About Us</h1>
                <p className="about-description">
                    Welcome to <strong>E-commerce</strong>, your number one source for all things [product category]. We're dedicated to providing you the very best of [product category], with an emphasis on quality, customer service, and uniqueness.
                </p>
            </section>

            <section className="about-story">
                <h2>Our Story</h2>
                <p>
                    Founded in [2025] by [Lamzy & hamskid], <strong>E-commerce</strong> has come a long way from its beginnings in [starting location]. When [Founder Name] first started out, their passion for [industry/idea], drove them to quit their day job, do tons of research, and turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the [industry] industry.
                </p>
            </section>

            <section className="about-mission">
                <h2>Our Mission</h2>
                <p>
                    At <strong>E-commerce</strong>, our mission is to bring you products that you'll love, backed by exceptional customer service. We believe in providing high-quality products that reflect your style and values, while offering convenience and competitive prices. We strive to continuously evolve and innovate, aiming to create a seamless shopping experience that meets the needs of our diverse customer base.
                </p>
            </section>

            <section className="about-values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Customer First:</strong> Your satisfaction is our top priority. We are committed to listening to our customers and providing the best experience possible.</li>
                    <li><strong>Quality Products:</strong> We take pride in offering products that are thoughtfully sourced, durable, and reflect the latest trends.</li>
                    <li><strong>Innovation:</strong> We are always looking for ways to improve our services and enhance your shopping experience.</li>
                    <li><strong>Sustainability:</strong> We aim to be mindful of our environmental impact by adopting eco-friendly practices wherever possible.</li>
                </ul>
            </section>

            <section className="about-cta">
                <h2>Get In Touch</h2>
                <p>
                    Whether you’re looking for the latest trends or need assistance with your order, we’re here to help! Feel free to reach out to us via our <a href="/contact">Contact Page</a>.
                </p>
                <p>
                    Thank you for choosing <strong>E-commerce</strong>. We look forward to serving you!
                </p>
            </section>
        </div>
    );
}

export default AboutPage;
