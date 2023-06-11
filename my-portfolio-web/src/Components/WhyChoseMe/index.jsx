import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap/all";
import './style.css';
import { useGlobalContext } from "../../Context/Context";

import Poseidon from '../../assets/FinalPics/Poseidon-Cool.png';

import Experience from '../../assets/FinalPics/Laptop.png';
import Creativity from '../../assets/FinalPics/Creativity.png';
import Collaboration from '../../assets/FinalPics/Collaboration.png';
import TimeManagment from '../../assets/FinalPics/Sandwatch.png';

export default function WhyChoseMe() {
    const {popUpOpen} = useGlobalContext();
    const refColLeft = useRef(null);
    const refColMid = useRef(null);
    const refColRight = useRef(null);

    useEffect(() => {
        const setupScrollTrigger = () => {
          gsap.registerPlugin(ScrollTrigger);
      
          const colLeft = refColLeft.current;
          const colMid = refColMid.current;
          const colRight = refColRight.current;

          setTimeout(() => {
            gsap.fromTo(colLeft, {x: -50, opacity: 0}, {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: colLeft,
                start: '-500',
                end: '50',
                scrub: true
              }
            });
          }, 300);

          setTimeout(() => {
            gsap.fromTo(colMid, {y: 50, opacity: 0}, {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: colMid,
                start: '-500',
                end: '50',
                scrub: true
              }
            });
          }, 300);

          setTimeout(() => {
            gsap.fromTo(colRight, {x: 50, opacity: 0}, {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: colRight,
                start: '-500',
                end: '50',
                scrub: true
              }
            });
          }, 300);
        };
      
        setupScrollTrigger();
      }, [refColLeft, refColMid, refColRight]);

    return(
    <div className={popUpOpen ? 'whyChoseMe bluredSection' : 'whyChoseMe'}>
        <h1 className="sectionTitle">Why I Stand Out</h1>
        <div className="whyChoseContainer">
            <div ref={refColLeft} className="firstCol charL col1">
                <div className="charcteristicL C1">
                    <div>
                        <img src={Experience} alt="Experience" className="characteristics"/>
                    </div>
                    <div>
                        <h1>Expertise</h1>
                        <p>Expert in web development, creating functional and visually impressive websites.</p>
                    </div>
                </div>
                <div className="charcteristicL C2">
                    <div>
                        <img src={Creativity} alt="Creativity" className="characteristics"/>
                    </div>
                    <div>
                        <h1>Creativity</h1>
                        <p>Embracing creativity, innovative solutions come to life in every project.</p>
                    </div>
                </div>
            </div>
            <div ref={refColMid} className="secondCol col2">
                <img src={Poseidon} alt="Poseidon-3" className="choseMePoseidon"/>
            </div>
            <div ref={refColRight} className="thirdCol col1">
                <div className="charcteristicR C3">
                    <div>
                        <img src={Collaboration} alt="Collaboration" className="characteristics"/>
                    </div>
                    <div>
                        <h1>Collaboration</h1>
                        <p>Excel at collaboration, fostering effective teamwork for successful project outcomes.</p>
                    </div>
                </div>
                <div className="charcteristicR C4">
                    <div>
                        <img src={TimeManagment} alt="Collaboration" className="characteristics"/>
                    </div>
                    <div>
                        <h1>Punctuality</h1>
                        <p>Mastery of time management ensures efficient project execution and timely delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}