import { useState, useEffect } from 'react';
import './Hero.css';

// Import all images from your assets folder
import SapphireRing from '../../assets/SapphireRing.jpg';
import RolexInbox from '../../assets/Rolexinbox.jpg';
import EmeraldRing from '../../assets/EmeraldRing.png';
import DiamondNecklace from '../../assets/diamond necklace.jpg';
import GoldChains from '../../assets/GoldChains.jpg';
import Bracelets from '../../assets/Bracelets.jpg';
import DiamondRing1 from '../../assets/DiamondRing1.jpg';
import DiamondRing from '../../assets/DiamondRing.jpg';

const Hero = () => {
  // Add the images you want in the carousel
  const images = [
    SapphireRing,
    RolexInbox,
    EmeraldRing,
    DiamondNecklace,
    GoldChains,
    Bracelets,
    DiamondRing1,
    DiamondRing
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
      <div className='hero-container'>
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
