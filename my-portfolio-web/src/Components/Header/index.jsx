import React from 'react';
import './style.css';

import Resume from '../../Resume/Arshak_Kosakyan_CV.pdf';

export default function Header() {
  const downloadResume = () => {
    const fileUrl = Resume;
    const fileName = 'Arshak_Kosakyan_CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  return (
    <div className='header'>
      <ul>
        <li>
          <a href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About Me
          </a>
        </li>
        <li>
          <a href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Experience
          </a>
        </li>
        <li>
          <a href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Portfolio
          </a>
        </li>
        <li>
          <a href='#' onClick={downloadResume}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get my CV
          </a>
        </li>
      </ul>
    </div>
  );
}
