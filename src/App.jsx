import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Layout/Footer'
import './App.css'

const contactBg = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"

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

      <Footer />
    </div>
  )
}

export default App
