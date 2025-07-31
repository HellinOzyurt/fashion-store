import React from 'react';
import './Hero.css';
import heroImage from '../../images/hero-image.png';

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Hero" />
      <div className="hero-text">
        <a href="#" className="btn">Shop Now</a>
      </div>
    </div>
  );
};

export default Hero;
