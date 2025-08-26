import { useState, useEffect } from 'react';
import './Hero.css';

// Import all images from your assets folder
import Weddingbands from '../../assets/Weddingbands.png';
import ring from '../../assets/ring.png';
import ring2 from '../../assets/ring2.png';
import ring3 from '../../assets/ring3.png';
import ring1 from '../../assets/ring1.png';

const Hero = () => {
  // Add the images you want in the carousel
  const images = [
    Weddingbands,
    ring,
    ring2,
    ring3,
    ring1,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  try {
    return (
      <div id='home-section' className='hero-container'>
        <div className='hero-content'>
          <div className='hero-text'>
            <span className='large-letter'>Y</span>orktown{' '}
            <span className='large-letter'>J</span>ewelers
          </div>
          <div className='hero-image-container'>
            <img
              src={images[currentImage]}
              alt={`Jewelry piece ${currentImage + 1}`}
              className='hero-image'
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering Hero component:', error);
    return (
      <div className='error'>Something went wrong. Please try again later.</div>
    );
  }
};

export default Hero;
