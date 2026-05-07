import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Layout/Footer'
import { IMAGES } from './constants/data'
import './App.css'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
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
