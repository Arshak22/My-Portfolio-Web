import React from "react";
import './style.css';
import Poseidon from '../../assets/FinalPics/Final1.png';
import Text from '../../assets/FinalPics/ChangingText/4.png'

export default function Introduction() {

    return (
    <div className="introduction">
        <div className="mainTitle">
            <h1>Greetings, mortal! I am Arshak</h1>
            <img src={Text} alt="text-1" className="text"/>
        </div>
        <div>
            <img src={Poseidon} alt="Poseidon-1" className="mainPoseidon"/>
        </div>
        
    </div>);
};