import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../../constants/data';

const TestimonialsSection = () => (
  <section className="section-container testimonials-section">
    <div className="testimonials-left">
      <div className="quote-icon" style={{ color: '#D4AF37' }}>“</div>
      <h2>The Voices of Luxury & Satisfaction.</h2>
      <div className="teal-line left"></div>
      <p>Our reputation is built on the trust of individuals who seek nothing but the best. Hear from those who have successfully found their sanctuary through the expertise of Sun Bright Properties.</p>
      <Link to="/designs">
        <button className="btn-primary">Explore Estates</button>
      </Link>
    </div>
    <div className="testimonials-right">
      {TESTIMONIALS.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <div className="stars">{"★".repeat(testimonial.stars)}</div>
          <p>"{testimonial.text}"</p>
          <div className="testimonial-author">{testimonial.author}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
