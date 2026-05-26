import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/data';

const PassionSection = () => (
  <section className="section-container passion-section">
    <div className="passion-img">
      <img src={IMAGES.passion} alt="Modern House" />
    </div>
    <div className="passion-content">
      <h2>Our Passion is Defining the Art of Living.</h2>
      <div className="teal-line left"></div>
      <p>
        At Sun Bright Properties, we believe a home is more than just a property—it is a sanctuary, 
        an investment, and a legacy. We are dedicated to providing a seamless, sophisticated 
        experience for the world's most discerning clients, ensuring every transition is as 
        extraordinary as the properties we represent.
      </p>
      <Link to="/about">
        <button className="btn-primary">Our Heritage</button>
      </Link>
    </div>
  </section>
);

export default PassionSection;
