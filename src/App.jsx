import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Contact from './pages/Contact'
import Footer from './components/Layout/Footer'
import CustomCursor from './components/Common/CustomCursor'
import Chatbot from './components/Common/Chatbot'
import { IMAGES } from './constants/data'
import './App.css'

import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

import ConstructionServices from './pages/ConstructionServices'
import Workers from './pages/Workers'

function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Chatbot />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Navigate to="/properties/all" replace />} />
          <Route path="/properties/:category" element={<Properties />} />
          <Route path="/properties/villa/:subCategory" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/construction-setup" element={<ConstructionServices />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
