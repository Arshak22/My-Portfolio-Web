import React from "react";
import './style.css';

export default function ContactMe() {
    return(
    <div className="contactMe">
        <div className="form">
            <h1>Reach Out to Me</h1>
            <p>Ride the waves of Poseidon's realm. Reach out using the form below, and let's embark on a digital odyssey together.</p>
            <div className="inputs">
                <div>
                    <input type="text" placeholder="Full Name" className="formInp"/>
                    <input type="email" name="email" id="email" placeholder="Email Address" className="formInp"/>
                </div>
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" className="formInp"></textarea>
            </div>
            <button className="wave-btn formSubmit">
                <span className="wave-btn_text">Send</span>
                <span className="wave-btn_waves"></span>
            </button>
        </div>
    </div>);
};