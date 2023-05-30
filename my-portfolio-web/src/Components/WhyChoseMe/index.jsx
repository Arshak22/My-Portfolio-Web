import React from "react";
import './style.css';

import Poseidon from '../../assets/FinalPics/Poseidon-Cool.png';

import Experience from '../../assets/Icons/quality.png';
import Creativity from '../../assets/Icons/idea-bulb.png';
import Professionalism from '../../assets/Icons/tie.png';
import Collaboration from '../../assets/Icons/cooperation.png';

export default function WhyChoseMe() {
    return(
    <div className="whyChoseMe">
        <h1 className="sectionTitle">Why I Stand Out</h1>
        <div className="whyChoseContainer">
            <div className="firstCol charL col1">
                <div>
                    <div className="C1">
                        <img src={Experience} alt="Experience" className="characteristics"/>
                    </div>
                    <h1>Expertise</h1>
                </div>
                <div>
                    <div className="C2">
                        <img src={Creativity} alt="Creativity" className="characteristics"/>
                    </div>
                    <h1>Creativity</h1>
                </div>
            </div>
            <div className="secondCol col2">
                <img src={Poseidon} alt="Poseidon-3" className="choseMePoseidon"/>
            </div>
            <div className="thirdCol col1">
                <div className="characteristics C3">
                    <img src={Professionalism} alt="Professionalism"/>
                </div>
                <div>
                    <h1>Professionalism</h1>
                </div>
                <div className="characteristics C4">
                    <img src={Collaboration} alt="Collaboration"/>
                </div>
                <div>
                    <h1>Collaboration</h1>
                </div>
            </div>
        </div>
    </div>);
}