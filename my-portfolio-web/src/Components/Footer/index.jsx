import React from 'react';
import './style.css';

import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <h3>@Copyright 2024</h3>
      </div>
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
  );
}
