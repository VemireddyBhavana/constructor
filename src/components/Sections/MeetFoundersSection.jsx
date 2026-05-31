import { motion } from 'framer-motion';
import { FOUNDERS } from '../../constants/data';

const MeetFoundersSection = () => {
  return (
    <section className="meet-founders-section">
      <div className="founders-glow-1"></div>
      <div className="founders-glow-2"></div>
      
      <div className="section-container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-tag">
            OUR LEADERSHIP
          </span>
          <h2 className="section-title dark-theme-title">
            Meet Our <span className="highlight-purple">Founder</span>
          </h2>
          <p className="section-subtitle dark-theme-subtitle">
            The visionary behind Sun Bright Properties — building the future of premium 
            luxury living across Hyderabad.
          </p>
        </div>

        <div className="founders-grid">
          {FOUNDERS.map((founder) => (
            <div 
              key={founder.id}
              className="founder-card-premium"
            >
              <div className="founder-card-inner">
                <div className="founder-image-container">
                  <img src={founder.image} alt={founder.name} className="founder-portrait-img" />
                </div>

                <div className="founder-details-container">
                  <div className="founder-badge-wrapper">
                    <span className="founder-role-badge">
                      <span className="badge-sparkle">✦</span> {founder.role}
                    </span>
                  </div>
                  
                  <h3 className="founder-name-title">{founder.name}</h3>
                  <p className="founder-bio-text">{founder.bio}</p>
                  
                  <p className="founder-extra-text">
                    Umakanth has dedicated his career to establishing a benchmark of ultimate premium housing. By bringing together absolute architectural refinement, high-grade material selection, and customer-first transparency, we ensure that every estate stands as a proud heritage home for generations to come.
                  </p>
                  
                  <div className="founder-divider"></div>
                  
                  <div className="founder-footer-row">
                    <div className="founder-social-links">
                      <a href={founder.socials.linkedin} target="_blank" rel="noreferrer" className="founder-social-btn" title="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href={founder.socials.twitter} target="_blank" rel="noreferrer" className="founder-social-btn" title="X (Twitter)">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                    <div className="founder-location-tag">
                      <i className="fa-solid fa-location-dot" style={{ color: '#c084fc', marginRight: '6px' }}></i>
                      <span>{founder.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .meet-founders-section {
          background-color: #09090d;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          color: #ffffff;
          font-family: 'Outfit', sans-serif;
        }

        .founders-glow-1 {
          position: absolute;
          top: -20%;
          left: 30%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .founders-glow-2 {
          position: absolute;
          bottom: -20%;
          right: 20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.03) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .section-tag {
          color: #a855f7;
          letter-spacing: 3px;
          font-weight: 700;
          font-size: 0.8rem;
          display: inline-block;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .dark-theme-title {
          color: #ffffff !important;
          font-size: clamp(2.4rem, 4.5vw, 3.2rem);
          margin-bottom: 20px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
        }

        .highlight-purple {
          background: linear-gradient(135deg, #a855f7 0%, #d946ef 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .dark-theme-subtitle {
          color: rgba(255, 255, 255, 0.5) !important;
          max-width: 650px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.6;
          font-family: 'Outfit', sans-serif;
        }

        .founders-grid {
          display: flex;
          justify-content: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .founder-card-premium {
          background: #121218;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          width: 100%;
          position: relative;
          min-height: 560px;
        }

        .founder-card-premium::before {
          display: none;
        }

        .founder-card-premium:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-10px);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(168, 85, 247, 0.1);
        }

        .founder-card-premium:hover .founder-portrait-img {
          transform: scale(1.03);
        }

        .founder-card-inner {
          display: flex;
          height: 100%;
        }

        .founder-image-container {
          width: 44%;
          min-width: 220px;
          position: relative;
          overflow: hidden;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .founder-portrait-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .founder-details-container {
          width: 56%;
          padding: 45px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
        }

        .founder-badge-wrapper {
          margin-bottom: 15px;
        }

        .founder-role-badge {
          background: rgba(168, 85, 247, 0.12);
          color: #c084fc;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(168, 85, 247, 0.25);
          text-transform: uppercase;
          font-family: 'Outfit', sans-serif;
        }

        .badge-sparkle {
          color: #d946ef;
          animation: floatSparkle 2s ease-in-out infinite alternate;
        }

        @keyframes floatSparkle {
          0% { transform: scale(0.85); filter: drop-shadow(0 0 1px #d946ef); }
          100% { transform: scale(1.15); filter: drop-shadow(0 0 4px #d946ef); }
        }

        .founder-name-title {
          color: #ffffff;
          font-size: 2.2rem;
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .founder-bio-text {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0 0 15px 0;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
        }

        .founder-extra-text {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0 0 25px 0;
          font-family: 'Outfit', sans-serif;
        }

        .founder-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.06);
          margin-bottom: 20px;
        }

        .founder-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .founder-social-links {
          display: flex;
          gap: 10px;
        }

        .founder-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .founder-social-btn:hover {
          background: rgba(168, 85, 247, 0.15);
          border-color: rgba(168, 85, 247, 0.3);
          color: #c084fc;
          transform: scale(1.05);
        }

        .founder-location-tag {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.45);
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .founders-grid {
            gap: 30px;
          }
          .founder-card-inner {
            flex-direction: column;
          }
          .founder-image-container {
            width: 100%;
            height: 480px;
          }
          .founder-image-overlay {
            background: linear-gradient(to top, rgba(18, 18, 24, 1) 0%, transparent 100%);
          }
          .founder-details-container {
            width: 100%;
            padding: 30px 25px;
          }
        }

        @media (max-width: 768px) {
          .founders-grid {
            max-width: 500px;
          }
          .meet-founders-section {
            padding: 60px 0;
          }
        }
      `}} />
    </section>
  );
};

export default MeetFoundersSection;
