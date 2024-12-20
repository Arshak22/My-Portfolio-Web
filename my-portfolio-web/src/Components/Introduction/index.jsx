import React, { useEffect, useState } from 'react';
import './style.css';

import Spline from '@splinetool/react-spline';
import Robot from '../../assets/FinalPics/Robot-Contact-Me.png';

export default function Introduction({ scrollToContact }) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;

      if (distanceFromBottom < 800) {
        setIsContactVisible(false);
      } else {
        setIsContactVisible(true);
      }

      if (window.scrollY > 500) {
        setIsLoaded(false);
      } else {
        setIsLoaded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='introduction'>
        {isLoaded && (
          <Spline scene='https://prod.spline.design/5CYOM3lZi2glSF0j/scene.splinecode' />
        )}
        <div className='title-section'>
          <h1 className='mainTitle'>Hi, I'm Arshak</h1>
          <h2 className='mainTitle mainTitle-2'>Your Future Web Developer</h2>
        </div>
      </div>

      <div
        className='contact-me'
        style={{ visibility: isContactVisible ? 'visible' : 'hidden' }}
      >
        <img src={Robot} alt='Robot-Contact-Me' onClick={scrollToContact} />
      </div>
    </>
  );
}
