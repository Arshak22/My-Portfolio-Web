import React from 'react';
import './style.css';

import HTML from '../../assets/Icons/HTML.png';
import CSS from '../../assets/Icons/CSS.png';
import JS from '../../assets/Icons/JS.png';
import ReactIcon from '../../assets/Icons/React.png';
import ThreeJS from '../../assets/Icons/ThreeJS.png';
import TypeScript from '../../assets/Icons/Typescript.png';
import WordPress from '../../assets/Icons/WordPress.png';
import Spline from '../../assets/Icons/Spline.png';

export default function Skills() {
  return (
    <div className='skills'>
      <h1>3+ Years of Dev Experience</h1>
      <img src={HTML} alt='HTML' className='skill-icon html-icon' />
      <img src={CSS} alt='CSS' className='skill-icon css-icon' />
      <img src={JS} alt='JS' className='skill-icon js-icon' />
      <img src={ReactIcon} alt='ReactIcon' className='skill-icon react-icon' />
      <img src={ThreeJS} alt='TreeJS' className='skill-icon three-icon' />
      <img
        src={TypeScript}
        alt='TypeScript'
        className='skill-icon typescript-icon'
      />
      <img
        src={WordPress}
        alt='WordPress'
        className='skill-icon wordpress-icon'
      />
      <img src={Spline} alt='Spline' className='skill-icon spline-icon' />
    </div>
  );
}
