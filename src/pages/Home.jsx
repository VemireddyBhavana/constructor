import React from 'react';
import Navbar from '../components/Layout/Navbar';

const heroBg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <span className="hero-subtitle">Discover Your Dream Home with Us</span>
            <h1 className="hero-title">Find the Perfect Property for Your Lifestyle</h1>
            <button className="btn-primary">Start Searching</button>
          </div>
        </div>
      </header>

      {/* What We Do Section */}
      <section className="section-container text-center">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          Simplifying the journey of buying, selling, and renting properties. Our expert team 
          provides comprehensive real estate solutions tailored to your needs
        </p>
        <div className="teal-line"></div>
        
        <div className="services-grid">
          <div className="service-card">
            <span className="service-num">01</span>
            <h3>Property Sales</h3>
            <p>Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.</p>
          </div>
          <div className="service-card">
            <span className="service-num">02</span>
            <h3>Property Rentals</h3>
            <p>Find your dream rental property with Real Estate, offering a variety of options to suit your needs and preferences.</p>
          </div>
          <div className="service-card">
            <span className="service-num">03</span>
            <h3>Property Management</h3>
            <p>Trust Real Estate to handle the day-to-day management of your property, maximizing its value and minimizing your stress.</p>
          </div>
          <div className="service-card">
            <span className="service-num">04</span>
            <h3>Lucrative Investments</h3>
            <p>Real Estate presents lucrative investment opportunities in the real estate market, providing high returns on investments.</p>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="section-container text-center bg-white-full">
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">
          Discover our hand-picked selection of top-notch properties with outstanding features, 
          guaranteed to meet your real estate needs and exceed your expectations.
        </p>
        <div className="teal-line"></div>

        <div className="properties-grid">
          <div className="property-card">
            <div className="property-img-container">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000" alt="Modern Stylish Apartment" />
            </div>
            <div className="property-info">
              <span className="property-category">APARTMENT - QUEENS</span>
              <h3>Modern Stylish Apartment</h3>
              <p>Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.</p>
              <div className="property-price">$150,000</div>
            </div>
          </div>
          <div className="property-card">
            <div className="property-img-container">
              <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000" alt="Contemporary Apartments" />
            </div>
            <div className="property-info">
              <span className="property-category">APARTMENT - QUEENS</span>
              <h3>Contemporary Apartments</h3>
              <p>Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.</p>
              <div className="property-price">$150,000</div>
            </div>
          </div>
          <div className="property-card">
            <div className="property-img-container">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" alt="Suburban Single-Family Homes" />
            </div>
            <div className="property-info">
              <span className="property-category">APARTMENT - QUEENS</span>
              <h3>Suburban Single-Family Homes</h3>
              <p>Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.</p>
              <div className="property-price">$150,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container testimonials-section">
        <div className="testimonials-left">
          <div className="quote-icon">“</div>
          <h2>Read from clients who have found the perfect place where they can create...</h2>
          <div className="teal-line left"></div>
          <p>Discover testimonials from satisfied clients who have found their dream properties with Real Estate, the trusted experts in helping you find the perfect place to call home.</p>
          <button className="btn-primary">More Testimonials</button>
        </div>
        <div className="testimonials-right">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque. Nam scelerisque placerat orci. Maecenas at pulvinar dui."</p>
            <div className="testimonial-author">JAMES OLIVER</div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque. Nam scelerisque placerat orci. Maecenas at pulvinar dui."</p>
            <div className="testimonial-author">JAMES OLIVER</div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section className="section-container passion-section">
        <div className="passion-img">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000" alt="Modern House" />
        </div>
        <div className="passion-content">
          <h2>Connecting people with perfect homes is our passion.</h2>
          <div className="teal-line left"></div>
          <p>With a genuine passion for helping people find their dream homes, we are dedicated to connecting buyers and sellers in the real estate market. Trust us to make your home buying or selling experience seamless and satisfying.</p>
          <button className="btn-primary">Read More</button>
        </div>
      </section>
    </>
  );
};

export default Home;
