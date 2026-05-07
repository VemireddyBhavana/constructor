import React from 'react';
import { TESTIMONIALS } from '../../constants/data';

const TestimonialsSection = () => (
  <section className="section-container testimonials-section">
    <div className="testimonials-left">
      <div className="quote-icon">“</div>
      <h2>Read from clients who have found the perfect place where they can create...</h2>
      <div className="teal-line left"></div>
      <p>Discover testimonials from satisfied clients who have found their dream properties with Real Estate, the trusted experts in helping you find the perfect place to call home.</p>
      <button className="btn-primary">More Testimonials</button>
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
