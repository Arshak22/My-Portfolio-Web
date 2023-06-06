import React from 'react';
import './style.css';
import ProgressBar from "@ramonak/react-progress-bar";

import Trident from '../../assets/FinalPics/FinalTrident.png';
import WaterDrops from '../../assets/FinalPics/WaterDrops.png';
import { useGlobalContext } from "../../Context/Context";

export default function AdditionalInformation() {
    const {popUpOpen} = useGlobalContext();
    return(
    <div className={popUpOpen ? 'MoreInfo bluredSection' : 'MoreInfo'}>
        <div className='firstCol'>
            <h1>Education</h1>
            <p>Sep 2017-May 2023 -- American University of Armenia(AUA)<br/>BS in Computer Science
            </p>
            <p>
            During my tenure at the American University of Armenia (AUA), where I pursued a Bachelor's degree in Computer Science, I gained valuable expertise in programming that has equipped me with a strong foundation to excel in the field.
            </p>
            <p className='top-margin'>Sep 2022-Feb 2023 -- TCO Academy -- Front-End Development
            </p>
            <p>
            I also attended the TCO Academy, where I honed my skills in Front-End Web development, with a focus on React JS. This experience expanded my expertise in creating dynamic and engaging user interfaces.
            </p>
            <h1 className='top-margin'>Languages</h1>
            <div className='progressSectionL'>
                <ProgressBar completed={100} customLabel="Armenian" dir='rtl' className="wrapperBar"
                barContainerClassName="container"
                completedClassName='barCompleted bar-1'
                labelClassName="label labelL"/>
                <ProgressBar completed={100} customLabel="English" dir='rtl' className="wrapperBar"
                barContainerClassName="container"
                completedClassName="barCompleted bar-2"
                labelClassName="label labelL"/>
                <ProgressBar completed={90} customLabel="Russian" dir='rtl' className="wrapperBar"
                barContainerClassName="container"
                completedClassName="barCompleted bar-3"
                labelClassName="label labelL"/>
            </div>
        </div>
        <div className='secondCol'>
            <img src={Trident} alt='Trident' className='Trident'/>
            <img src={WaterDrops} alt='WaterDrops' className='WaterDrops'/>
        </div>
        <div className='thirdCol'>
            <h1>Experience</h1>
            <p>Jun 2021-Jun 2022 -- MyBrokerSearch<br/>Web Developer
            </p>
            <p>
            In my previous position, I collaborated with US brokers, creating marketing materials and designing professional websites. I also managed website security, functionality, and integrated IDX software for property search capabilities.
            </p>
            <p className='top-margin'>Apr 2023-Present -- Team2B -- Web Developer
            </p>
            <p>
            In my current role, I specialize in creating custom websites for various Armenian companies. By leveraging my skills in web development, design, and user experience, I deliver visually appealing and functional websites for each client.
            </p>
            <h1 className='top-margin'>Skills</h1>
            <div className='progressSectionR'>
                <ProgressBar completed={85} customLabel="React JS / JavaScript" dir='ltr' className="wrapperBar"
                barContainerClassName="container"
                completedClassName="barCompleted barCompletedR bar-4"
                labelClassName="label labelR"/>
                <ProgressBar completed={90} customLabel="HTML / CSS / SASS" dir='ltr' className="wrapperBar"
                barContainerClassName="container"
                completedClassName="barCompleted barCompletedR bar-5"
                labelClassName="label labelR"/>
                <ProgressBar completed={85} customLabel="WordPress" dir='ltr' className="wrapperBar"
                barContainerClassName="container"
                completedClassName="barCompleted barCompletedR bar-6"
                labelClassName="label labelR"/>
            </div>
        </div>
    </div>);
};