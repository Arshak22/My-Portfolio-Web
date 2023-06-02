import React from "react";
import './style.css';

import Logo from '../../assets/FinalPics/FinalLogo.png';

export default function LoadingPage() {
    return(
    <div className="loading">
        <img src={Logo} alt="Logo" className="mainLogo"/>
    </div>);
};