import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact() {
    return (
        <div className="bg-slate-100 flex items-center justify-center flex-row w-screen h-screen gap-1">
            <div className="bg-slate-200 flex items-center justify-center flex-col h-[80%] w-[35%] gap-5 rounded-lg">
                <div className="font-bold flex items-center justify-center flex-col">
                    <h3 className="font-bold text-blue-500">Reach out to us...!</h3>
                    <small className="font-semibold px-5">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</small>
                </div>
                <div className="font-bold flex items-center justify-center flex-row">
                    <label htmlFor="text" className="text-xl font-bold my-4">Contact :</label>
                    <a href="tel:+919326588118"><FontAwesomeIcon icon={faPhone} className="text-info ml-4" /></a>
                    <a href="https://wa.me/+919326588118" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="text-success ml-3" /></a>
                    <a href="mailto:izharshah9305@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="mx-3 text-danger" /></a>
                </div>
                <div className="font-bold flex items-center justify-center flex-row">
                    <label htmlFor="text" className="text-xl font-bold my-5">Socials  : </label>
                    <a href="https://instagram.com/mr_izzu_shah" target="_blank" rel="noopener noreferrer" className="">
                        <FontAwesomeIcon icon={faInstagram} className="text-danger ml-4" />
                    </a>
                    <a href="https://facebook.com/share/14JpJgFA79d/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-primary mx-2" />
                    </a>
                    <a href="https://linkedin.com/in/hats-off-code" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-primary mx-1" />
                    </a>
                    <a href="https://github.com/HatsOffCode" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-dark mx-1" />
                    </a>
                </div>
            </div>
            <div className="bg-slate-200 flex items-center justify-center flex-col h-[80%] w-[35%] gap-3 rounded-lg">
                <input type="text" placeholder="Name..." className="text-center border border-slate-300 outline-none rounded-xl w-[400px] h-[40px]" />
                <input type="text" placeholder="Email..." className="text-center border border-slate-700 outline-none rounded-xl w-[400px] h-[40px]" />
                <input type="number" placeholder="Mobile No..." className="text-center border border-slate-700 outline-none rounded-xl w-[400px] h-[40px]" />
                <input type="text" placeholder="Subject..." className="text-center border border-slate-700 outline-none rounded-xl w-[400px] h-[40px]" />
                <textarea name="" placeholder="Write your message here" className="text-center border border-slate-700 outline-none rounded-lg w-[400px] h-[125px] p-5" />
                <button className="btn btn-primary w-[400px]">Send message</button>
            </div>
        </div>
    );
}

export default Contact;