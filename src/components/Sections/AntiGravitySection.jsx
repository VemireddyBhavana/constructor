import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/data';

const AntiGravitySection = () => {
  const houses = [
    { id: 1, img: IMAGES.heroHome, left: '8%', size: '120px', delay: '0s', duration: '10s', rotate: '-6deg' },
    { id: 2, img: IMAGES.heroHome2, left: '20%', size: '85px', delay: '2s', duration: '12s', rotate: '4deg' },
    { id: 3, img: IMAGES.heroHome3, left: '38%', size: '140px', delay: '1s', duration: '8.5s', rotate: '-4deg' },
    { id: 4, img: IMAGES.heroHome, left: '58%', size: '95px', delay: '4s', duration: '13s', rotate: '5deg' },
    { id: 5, img: IMAGES.heroHome2, left: '74%', size: '110px', delay: '0.5s', duration: '11s', rotate: '-3deg' },
    { id: 6, img: IMAGES.heroHome3, left: '88%', size: '75px', delay: '3.5s', duration: '9s', rotate: '6deg' },
  ];

  return (
    <section className="antigravity-section" style={{
      position: 'relative',
      height: '800px',
      backgroundImage: `linear-gradient(rgba(5, 8, 16, 0.8), rgba(5, 8, 16, 0.8)), url('/assets/ag-bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px'
    }}>
      {/* Radial Atmosphere Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(77, 159, 232, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(200, 169, 110, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 1
      }} />

      {/* Floating Houses Container */}
      <div className="floating-container" style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        {houses.map((house, idx) => (
          <div 
            key={house.id}
            className={`floating-house-card house-${idx + 1}`}
            style={{
              position: 'absolute',
              left: house.left,
              bottom: '-200px',
              width: house.size,
              height: 'auto',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(200, 169, 110, 0.2)',
              pointerEvents: 'none',
              animation: `agFloat ${house.duration} linear infinite`,
              animationDelay: house.delay,
              '--rotate': house.rotate
            }}
          >
            <div className="shimmer-overlay" />
            <img src={house.img} alt="Floating Home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="ag-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span style={{ color: '#C8A96E', letterSpacing: '6px', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>
            ARCHITECTURAL MARVELS
          </span>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
            fontFamily: "'Playfair Display', serif", 
            fontWeight: '300', 
            color: '#fff', 
            margin: '30px 0',
            lineHeight: '1.1'
          }}>
            Homes That <br />
            <i style={{ color: '#C8A96E' }}>Defy Limits</i> <br />
            and Logic
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.8' }}>
            Our Signature Series represents the pinnacle of human ingenuity—homes that aren't just built, but envisioned beyond the ordinary.
          </p>
          <Link to="/designs">
            <button className="btn-hero" style={{ border: '1px solid #C8A96E', background: 'transparent', color: '#C8A96E' }}>
              Explore the Collection
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Atmosphere Fog and Fades */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '150px',
        background: 'linear-gradient(to bottom, #050810 0%, transparent 100%)',
        zIndex: 5
      }} />
      <div className="ground-fog" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '250px',
        background: 'linear-gradient(to top, #050810 20%, transparent 100%)',
        zIndex: 5,
        opacity: 0.8
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes agFloat {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          30% {
            transform: translateY(-35vh) rotate(var(--rotate));
            opacity: 0.9;
          }
          55% {
            transform: translateY(-65vh) rotate(calc(var(--rotate) * -1));
          }
          80% {
            transform: translateY(-95vh) rotate(var(--rotate));
            opacity: 0.35;
          }
          100% {
            transform: translateY(-130vh) rotate(0deg);
            opacity: 0;
          }
        }

        .shimmer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(200, 169, 110, 0.1) 45%,
            rgba(200, 169, 110, 0.2) 50%,
            rgba(200, 169, 110, 0.1) 55%,
            transparent 100%
          );
          background-size: 200% 200%;
          animation: agShimmer 3s infinite linear;
        }

        @keyframes agShimmer {
          0% { background-position: -100% -100%; }
          100% { background-position: 100% 100%; }
        }

        @media (max-width: 768px) {
          .house-1, .house-6 {
            display: none !important;
          }
          .ag-content h2 {
            font-size: 3rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default AntiGravitySection;
