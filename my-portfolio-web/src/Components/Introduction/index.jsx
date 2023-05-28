import React, { useState, useEffect } from 'react';
import './style.css';

import { BsFillCloudDownloadFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";

import Resume from '../../Resume/Arshak_Kosakyan_CV.pdf';

import Poseidon from '../../assets/FinalPics/Final1.png';
import FirstText from '../../assets/FinalPics/ChangingText/1.png';
import SecondText from '../../assets/FinalPics/ChangingText/2.png';
import ThirdText from '../../assets/FinalPics/ChangingText/3.png';
import FourthText from '../../assets/FinalPics/ChangingText/4.png';

export default function Introduction() {
  const imageSources = [FirstText, SecondText, ThirdText, FourthText];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="introduction">
      <div className="mainTitle">
        <h1>Greetings, mortal! I am Arshak</h1>
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`text-${index + 1}`}
            className={`text ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div>
          <button className="wave-btn" onClick={downloadResume}>
            <span className="wave-btn_text">My CV <BsFillCloudDownloadFill className='btnIcon'/></span>
            <span className="wave-btn_waves"></span>
          </button>
          <button className="wave-btn">
            <span className="wave-btn_text">Contact Me <HiEnvelope className='btnIcon'/></span>
            <span className="wave-btn_waves"></span>
          </button>
        </div>
      </div>
      <div>
        <img src={Poseidon} alt="Poseidon-1" className="mainPoseidon" />
      </div>
    </div>);
}