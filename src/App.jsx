import { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import './App.css'

const heroBg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
const aboutBg = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
const apartment1 = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000"
const apartment2 = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000"
const home = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000"
const passionImg = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000"
const contactBg = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"

const Logo = ({ className }) => (
  <div className={`nav-logo ${className}`}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="logo-icon-svg">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M13 21V11l5-3v13" />
      <rect x="7" y="10" width="2" height="2" />
      <rect x="7" y="14" width="2" height="2" />
    </svg>
    <span>Real<b>Estate</b></span>
  </div>
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === '/') {
      navigate('/home');
    }
  }, [currentPath, navigate]);

  const isHome = currentPath === '/home' || currentPath === '/';
  const isAbout = currentPath === '/about';

  return (
    <div className="app-wrapper">
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${isAbout ? aboutBg : heroBg})` }}>
        <div className="hero-overlay">
          <nav className="navbar">
            <Logo className="light" />
            <ul className="nav-links">
              <li><Link to="/home" className={isHome ? 'active' : ''}>Home</Link></li>
              <li><Link to="/about" className={isAbout ? 'active' : ''}>About</Link></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Properties</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="nav-socials">
              <a href="#">🐦</a>
              <a href="#">📌</a>
              <a href="#">▶️</a>
              <a href="#" className="search-icon">🔍</a>
            </div>
          </nav>
          
          <div className="hero-content">
            {isAbout ? (
              <>
                <span className="hero-subtitle">About</span>
                <h1 className="hero-title">Discover Our Story and Expertise</h1>
              </>
            ) : (
              <>
                <span className="hero-subtitle">Discover Your Dream Home with Us</span>
                <h1 className="hero-title">Find the Perfect Property for Your Lifestyle</h1>
                <button className="btn-primary">Start Searching</button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {isAbout ? (
          /* About Page Content */
          <>
            {/* About Us Intro Section */}
            <section className="section-container about-intro-section">
              <div className="about-intro-grid">
                <div className="about-intro-img">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" alt="Modern House" />
                </div>
                <div className="about-intro-content">
                  <h2 className="section-title left">About Us</h2>
                  <div className="teal-line left"></div>
                  <p className="lead-text">Welcome to Real Estate, your trusted partner in the world of real estate. With a passion for connecting people with their dream properties, we are dedicated to providing exceptional service and delivering outstanding results.</p>
                  <p>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry. With years of experience and a dedicated team of professionals, we are committed to providing exceptional service to our clients. Whether you are buying, selling, or renting, we are here to guide you throughout the entire process and ensure a smooth and successful transaction.</p>
                </div>
              </div>
            </section>

            {/* Client-Centric Section */}
            <section className="section-container text-center client-centric-section bg-cream">
              <span className="section-tag">CLIENT-CENTRIC APPROACH</span>
              <div className="teal-line"></div>
              <h2 className="large-quote">Our clients are our priority. Exceptional customer service and personalized experiences define our company culture.</h2>
            </section>

            {/* Our Story Section */}
            <section className="section-container our-story-section">
              <div className="our-story-grid">
                <div className="our-story-content">
                  <h2 className="section-title left">Our Story</h2>
                  <div className="teal-line left"></div>
                  <p className="lead-text">Built on a foundation of trust, integrity, and a deep-rooted passion for architectural excellence.</p>
                  <p>From our humble beginnings to becoming a leader in the luxury real estate market, our journey has always been defined by the people we serve. We believe that a home is more than just a property; it's a sanctuary where life unfolds. Over the years, we have refined our expertise to offer an unparalleled experience, combining data-driven insights with a personal touch that ensures every client finds their perfect match.</p>
                  <p>Our commitment goes beyond transactions. We strive to build lasting relationships and contribute to the growth of the communities we operate in. With a team of experts who understand the nuances of the local and global markets, we are here to turn your real estate aspirations into reality.</p>
                </div>
                <div className="our-story-img">
                  <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000" alt="Modern Interior" />
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Home Page Content */
          <>
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
        )}

        {/* Shared Contact Section */}
        <section className="contact-section" style={{ backgroundImage: `url(${contactBg})` }}>
          <div className="contact-overlay">
            <div className="contact-card">
              <span className="contact-tag">CONTACT US</span>
              <h2>Schedule an Appointment</h2>
              <div className="teal-line"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="footer-section section-container">
        <div className="footer-grid">
          <div className="footer-col">
            <Logo className="dark" />
          </div>
          <div className="footer-col">
            <h3>About Us</h3>
            <p>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry with years of experience.</p>
          </div>
          <div className="footer-col">
            <h3>Contact Info</h3>
            <div className="contact-links">
              <a href="#">13, Fifthe Avenue, New York, NY 101660</a>
              <a href="mailto:contact@info.com">contact@info.com</a>
              <a href="tel:5553454599">555-345-4599</a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Property Search</h3>
            <p>Lorem ipsum dolor sit amet, consectetur elit. Donec faucibus, quam sed.</p>
            <div className="footer-search">
              <input type="text" placeholder="Search Properties" />
              <button className="footer-search-btn">🔍</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © 2026 Real Estate Company</p>
          <div className="footer-bottom-right">
            <div className="footer-socials">
              <a href="#">🐦</a>
              <a href="#">📌</a>
              <a href="#">▶️</a>
              <a href="#">📷</a>
            </div>
            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
