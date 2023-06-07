import React, { useEffect, useRef} from 'react';
import { gsap } from "gsap-trial";
import './style.css';

import Poseidon from '../../assets/FinalPics/Final2.png';

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

export default function BIO() {
    const refSectionFadeIn = useRef(null);
    const ref = useRef(null);

    useEffect(() => {
        const sectionFadeIn = refSectionFadeIn.current;
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

        const fadeIn = gsap.fromTo(sectionFadeIn, {y: -100, opacity: 0}, {
            opacity: 1, y: 0,
            scrollTrigger: {
                trigger: sectionFadeIn,
                start: 'top',
                end: '80%',
                scrub: true
            }
        });

        return () => {
            animation.kill();
            fadeIn.kill();
        };
    }, [ref]);

    return (
    <div ref={refSectionFadeIn} className='BIOSection'>
        <div className='colL'>
            <img src={Poseidon} alt='Poseidon2'/>
        </div>
        <div ref={ref} data-speed="0.5" className='colR'>
            <h1>Welcome to my digital realm!</h1>
            <p>I'm Arshak Kosakyan, a Front End Developer who brings your online vision to life with a touch of magic. With a deep passion for Greek Mythology, I've crafted this portfolio website with the enchanting theme of Poseidon himself.<br/><br/>

            But I'm not just a lone sailor on this voyage. Collaboration and communication are at the helm of my approach. Together, we'll navigate the creative waters, exceeding expectations and delivering exceptional results.<br/><br/>
            
            So, let's embark on a mythical journey together. Whether you have a project in mind or simply want to connect, don't hesitate to reach out. Prepare to be immersed in a sea of creativity!</p>
            <div className='socialIcons'>
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
        </div>
    </div>);
};