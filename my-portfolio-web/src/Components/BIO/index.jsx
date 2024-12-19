import React from 'react';
import './style.css';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
  FaCodepen,
} from 'react-icons/fa';

import MyPic2 from '../../assets/FinalPics/MyPic2.png';

export default function BIO() {
  return (
    <div className='BIOSection'>
      <div className='l-col'>
        <img
          src={MyPic2}
          alt='my-pic'
        />
      </div>
      <div className='r-col'>
        <h1>Welcome to the Future of Web Design!</h1>
        <p>
          I'm Arshak Kosakyan, a Front-End Developer dedicated to crafting
          cutting-edge, user-centric digital experiences. I specialize in
          designing websites that are not just functional but intuitive and
          visually engaging, blending the latest design trends with seamless
          interactivity.
        </p>
        <p>
          I believe that the future of web design is all about creating
          immersive, fast, and accessible experiences that captivate users from
          the first click. Collaboration is at the heart of my process, where
          clear communication and innovative thinking lead to exceptional
          results.
        </p>
        <p>
          If you're looking for a modern, future-ready website that pushes
          boundaries, let’s connect. Together, we can bring your vision to life
          with a design that stands out in an ever-evolving digital landscape.
        </p>
        <div className='social-icons-bio'>
          <ul>
            <li>
              <a
                href='https://github.com/Arshak22'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/arshak-kosakyan-10a6a3268/'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/arshak.qosakyan'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href='https://t.me/ArshakKosakyan'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href='https://codepen.io/Arsho_666'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaCodepen />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
