import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Footer from './components/Layout/Footer'
import { IMAGES } from './constants/data'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* Shared Contact Section */}
      <div className="main-content">
        <section className="contact-section" style={{ backgroundImage: `url(${IMAGES.contact})` }}>
          <div className="contact-overlay">
            <div className="contact-card">
              <span className="contact-tag">CONTACT US</span>
              <h2>Schedule an Appointment</h2>
              <div className="teal-line"></div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default App
