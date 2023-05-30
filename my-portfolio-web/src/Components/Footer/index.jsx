import React from 'react';
import './style.css';

import Logo from '../../assets/FinalPics/FinalLogo.png';

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

export default function Footer() {
    return(
    <div className='footer'>
        <div>
            <img src={Logo} alt='Logo' className='footerLogo'/>
        </div>
        <div>
            <h3>@Copyright 2023</h3>
        </div>
        <div className='socialIcons footerIcons'>
                <a href="https://www.facebook.com/arshak.qosakyan" target="_blank" rel="noopener noreferrer" className='social-icon'>
                    <FaFacebookF/>
                </a>
                <a href="https://www.linkedin.com/in/arshak-kosakyan-10a6a3268/" target="_blank" rel="noopener noreferrer" className='social-icon'>
                    <FaLinkedinIn/>
                </a>
                <a href="https://t.me/ArshakKosakyan" target="_blank" rel="noopener noreferrer" className='social-icon'>
                    <FaTelegramPlane/>
                </a>
                <a href="https://github.com/Arshak22" target="_blank" rel="noopener noreferrer" className='social-icon'>
                    <FaGithub/>
                </a>
                <a href="https://codepen.io/Arsho_666" target="_blank" rel="noopener noreferrer" className='social-icon'>
                    <FaCodepen/>
                </a>
            </div>
    </div>);
};