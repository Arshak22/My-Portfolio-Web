import React, { useEffect, useState, useRef } from 'react';
import './style.css';

import Spline from '@splinetool/react-spline';

import { GrTechnology } from 'react-icons/gr';

export default function Experience() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        } else {
          setIsLoaded(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='experience'  ref={sectionRef}>
      {isLoaded && (
        <Spline scene="https://prod.spline.design/AXZwiGeimzz1Ghzf/scene.splinecode" className='cube-and-circles'/>
      )}
      <div className='education'>
        <h1>Education and Languages</h1>
        <p>
          <GrTechnology className='small-icon' style={{ color: 'red' }} />
          <strong>
            Sep 2017-May 2023 -- American University of Armenia(AUA) BS in
            Computer Science
          </strong>
          <br></br>
          During my tenure at the American University of Armenia (AUA), where I
          pursued a Bachelor's degree in Computer Science, I gained valuable
          expertise in programming that has equipped me with a strong foundation
          to excel in the field.
        </p>
        <p>
          <GrTechnology className='small-icon' />
          <strong>
            Sep 2022-Feb 2023 -- TCO Academy -- Front-End Development
          </strong>
          <br></br>I also attended the TCO Academy, where I honed my skills in
          Front-End Web development, with a focus on React JS. This experience
          expanded my expertise in creating dynamic and engaging user
          interfaces.
        </p>
        <p>
          <ul>
            <li>Armenian: Native</li>
            <li>English: Intermediate</li>
            <li>Russian: Intermediate</li>
            <li>French: Beginner</li>
          </ul>
        </p>
      </div>
      <div className='education experience-block'>
        <h1>Experience</h1>
        <p>
          <GrTechnology className='small-icon' />
          <strong>Jun 2021-Jun 2022 -- MyBrokerSearch Web Developer</strong>
          <br></br>
          In my previous position, I collaborated with US brokers, creating
          marketing materials and designing professional websites. I also
          managed website security, functionality, and integrated IDX software
          for property search capabilities.
        </p>
        <p>
          <GrTechnology className='small-icon' />
          <strong>Apr 2023-Present -- Team2B --<br></br>Web Developer</strong>
          <br></br>
          In my current role, specialize in creating custom websites for various
          Armenian companies. By leveraging my skills in web development,
          design, and user experience, I deliver visually appealing and
          functional websites for each client.
        </p>
      </div>
    </div>
  );
}
