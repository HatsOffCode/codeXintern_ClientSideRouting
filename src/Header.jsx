import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faSnapchat, faThreads, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className='bg-black flex flex-row'>
      <div className='mx-4'>
        <img src="erBlackBg.png" alt="Logo" className='w-[70px] h-[70px] rounded-lg' />
      </div>
      <div className='flex items-center justify-center flex-row text-lg hover:no-underline text-white font-bold'>
        <ul className='flex flex-row gap-5 my-1'>
          <li><Link to={"/"} className='no-underline hover:no-underline text-white font-bold'>Home</Link></li>
          <li><Link to={"/feature"} className='no-underline hover:no-underline text-white font-bold'>Feature</Link></li>
          <li><Link to={"/contact"} className='no-underline hover:no-underline text-white font-bold'>Contact</Link></li>
          <li><Link to={"/about"} className='no-underline hover:no-underline text-white font-bold'>About</Link></li>
          <li class="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              S.Media
            </a>
            <ul className="dropdown-menu">
              <a href="https://snapchat.com/add/izhar828188" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSnapchat} className="text-warning m-2" />
              </a>

              <a href="https://facebook.com/share/14JpJgFA79d/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-primary m-2" />
              </a>

              <a href="https://instagram.com/mr_izzu_shah" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-danger m-2" />
              </a>

              <a href="https://x.com/Mr_izzu_Shah" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-dark m-2" />
              </a>

              <a href="https://threads.com/mr_izzu_shah" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faThreads} className="text-dark m-2" />
              </a>


              <a href="https://linkedin.com/in/hats-off-code" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-primary m-2" />
              </a>


              <a href="https://github.com/HatsOffCode" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-dark m-2" />
              </a>


              <a href="/">
                <FontAwesomeIcon icon={faYoutube} className="text-danger m-2" />
              </a>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
