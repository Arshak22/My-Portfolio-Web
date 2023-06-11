import React, { useState, useEffect, useRef } from 'react';
import './style.css';

import { BsFillCloudDownloadFill } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';

import Resume from '../../Resume/Arshak_Kosakyan_CV.pdf';

import Poseidon from '../../assets/FinalPics/Final1.png';
import FirstText from '../../assets/FinalPics/ChangingText/1.png';
import SecondText from '../../assets/FinalPics/ChangingText/2.png';
import ThirdText from '../../assets/FinalPics/ChangingText/3.png';
import FourthText from '../../assets/FinalPics/ChangingText/4.png';

const imageSources = [FirstText, SecondText, ThirdText, FourthText];

export default function Introduction({ scrollToContact }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const introductionRef = useRef(null);
  const mainTitleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const introductionHeight = introductionRef.current.offsetHeight;
      const fadeOutDistance = 800;

      const opacity = Math.max(0, 1 - (scrollPosition - introductionHeight + fadeOutDistance) / fadeOutDistance);
      introductionRef.current.style.opacity = opacity.toString();
    };

    const handleTitleScroll = () => {
      const scrollPosition = window.scrollY * -0.2;
      mainTitleRef.current.style.transform = `translateY(${scrollPosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleTitleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleTitleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const downloadResume = () => {
    const fileUrl = Resume;
    const fileName = 'Arshak_Kosakyan_CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }; 

  return (
    <div className="introduction" ref={introductionRef}>
      <div className="mainTitle" ref={mainTitleRef}>
        <h1>Greetings, mortal! I am Arshak</h1>
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`text-${index + 1}`}
            className={`text ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="btns">
          <button className="wave-btn" onClick={downloadResume}>
            <span className="wave-btn_text">
              My CV <BsFillCloudDownloadFill className="btnIcon" />
            </span>
            <span className="wave-btn_waves"></span>
          </button>
          <button className="wave-btn" onClick={scrollToContact}>
            <span className="wave-btn_text">
              Contact Me <HiEnvelope className="btnIcon" />
            </span>
            <span className="wave-btn_waves"></span>
          </button>
        </div>
      </div>
      <div>
        <img src={Poseidon} alt="Poseidon-1" className="mainPoseidon" />
      </div>
    </div>
  );
};