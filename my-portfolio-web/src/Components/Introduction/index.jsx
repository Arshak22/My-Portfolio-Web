import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap-trial";
import './style.css';

import { BsFillCloudDownloadFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";

import Resume from '../../Resume/Arshak_Kosakyan_CV.pdf';

import Poseidon from '../../assets/FinalPics/Final1.png';
import FirstText from '../../assets/FinalPics/ChangingText/1.png';
import SecondText from '../../assets/FinalPics/ChangingText/2.png';
import ThirdText from '../../assets/FinalPics/ChangingText/3.png';
import FourthText from '../../assets/FinalPics/ChangingText/4.png';

const imageSources = [FirstText, SecondText, ThirdText, FourthText];

export default function Introduction({ scrollToContact }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const refSection = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const section = refSection.current;
    const element = ref.current;
    const speed = parseFloat(element.getAttribute("data-speed"));

    const animation = gsap.to(element, {
      y: () => -window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const fadeOut = gsap.fromTo(section, {opacity: 1}, {
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        start: 'center',
        end: '720',
        scrub: true
      }
    });

    return () => {
      animation.kill();
      fadeOut.kill();
    };
  }, [ref]);

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
    <div ref={refSection} className="introduction">
      <div ref={ref} data-speed="0.5" className="mainTitle">
        <h1>Greetings, mortal! I am Arshak</h1>
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`text-${index + 1}`}
            className={`text ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className='btns'>
          <button className="wave-btn" onClick={downloadResume}>
            <span className="wave-btn_text">My CV <BsFillCloudDownloadFill className='btnIcon'/></span>
            <span className="wave-btn_waves"></span>
          </button>
          <button className="wave-btn" onClick={scrollToContact}>
            <span className="wave-btn_text">Contact Me <HiEnvelope className='btnIcon'/></span>
            <span className="wave-btn_waves"></span>
          </button>
        </div>
      </div>
      <div>
        <img src={Poseidon} alt="Poseidon-1" className="mainPoseidon"/>
      </div>
    </div>);
};