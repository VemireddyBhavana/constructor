import React from 'react';
import { IMAGES } from '../../constants/data';

const PassionSection = () => (
  <section className="section-container passion-section">
    <div className="passion-img">
      <img src={IMAGES.passion} alt="Modern House" />
    </div>
    <div className="passion-content">
      <h2>Connecting people with perfect homes is our passion.</h2>
      <div className="teal-line left"></div>
      <p>With a genuine passion for helping people find their dream homes, we are dedicated to connecting buyers and sellers in the real estate market. Trust us to make your home buying or selling experience seamless and satisfying.</p>
      <button className="btn-primary">Read More</button>
    </div>
  </section>
);

export default PassionSection;
