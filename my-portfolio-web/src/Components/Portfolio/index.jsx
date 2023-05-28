import React from 'react';
import './style.css';

import WaterElement1 from '../../assets/FinalPics/WaterElement1.png';
import WaterElement2 from '../../assets/FinalPics/WaterElement2.png';

//Project-1
import Project1_1 from '../../assets/PortfolioWebPics/6-1.jpg';
import Project1_2 from '../../assets/PortfolioWebPics/6-2.jpg';
import Project1_3 from '../../assets/PortfolioWebPics/6-3.jpg';
import Project1_4 from '../../assets/PortfolioWebPics/6-4.jpg';

//Project-2
import Project2_1 from '../../assets/PortfolioWebPics/3-1.jpg';
import Project2_2 from '../../assets/PortfolioWebPics/3-2.jpg';
import Project2_3 from '../../assets/PortfolioWebPics/3-3.jpg';
import Project2_4 from '../../assets/PortfolioWebPics/3-4.jpg';

//Project-3
import Project3_1 from '../../assets/PortfolioWebPics/1-1.jpg';
import Project3_2 from '../../assets/PortfolioWebPics/1-2.jpg';
import Project3_3 from '../../assets/PortfolioWebPics/1-3.jpg';
import Project3_4 from '../../assets/PortfolioWebPics/1-4.jpg';

//Project-4
import Project4_1 from '../../assets/PortfolioWebPics/2-1.jpg';
import Project4_2 from '../../assets/PortfolioWebPics/2-2.jpg';
import Project4_3 from '../../assets/PortfolioWebPics/2-3.jpg';
import Project4_4 from '../../assets/PortfolioWebPics/2-4.jpg';

//Project-5
import Project5_1 from '../../assets/PortfolioWebPics/5-1.jpg';
import Project5_2 from '../../assets/PortfolioWebPics/5-2.jpg';
import Project5_3 from '../../assets/PortfolioWebPics/5-3.jpg';
import Project5_4 from '../../assets/PortfolioWebPics/5-4.jpg';

//Project-6
import Project6_1 from '../../assets/PortfolioWebPics/4-1.jpg';
import Project6_2 from '../../assets/PortfolioWebPics/4-2.jpg';
import Project6_3 from '../../assets/PortfolioWebPics/4-3.jpg';
import Project6_4 from '../../assets/PortfolioWebPics/4-4.jpg';

export default function Portfolio() {
    return(
    <div className='Portfolio'>
        <h1>My Portfolio</h1>
        <img src={WaterElement1} alt='WaterElement-1' className='waterElement1'/>
        <div className='portfolioContainer'>
            <div className='project'>
                <img src={Project1_1} alt='Project-1'/>
            </div>
            <div className='project'>
                <img src={Project2_1} alt='Project-1'/>
            </div>
            <div className='project'>
                <img src={Project3_1} alt='Project-1'/>
            </div>
            <div className='project'>
                <img src={Project4_1} alt='Project-1'/>
            </div>
            <div className='project'>
                <img src={Project5_1} alt='Project-1'/>
            </div>
            <div className='project'>
                <img src={Project6_1} alt='Project-1'/>
            </div>
        </div>
        <img src={WaterElement2} alt='WaterElement-1' className='waterElement2'/>
    </div>);
}