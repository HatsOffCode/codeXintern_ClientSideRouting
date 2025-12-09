import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark d-flex flex-column justify-content-center align-items-center">
                <small className="text-light"><FontAwesomeIcon icon={faCopyright} /><i> {new Date().getFullYear()} E-Recorder. All rights reserved.</i></small>
                <div className="m-2">
                  <a href="tel:+919326588118"><FontAwesomeIcon icon={faPhone} className="text-info m-3"/></a>
                  <a href="https://wa.me/+919326588118" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="text-success m-3" /></a>
                  <a href="mailto:izharshah9305@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="text-light m-3" /></a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;