import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faYoutube, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import CustomLink from './CustomLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center gap-4 text-white py-4 bg-gray-800">
      <a href="https://www.linkedin.com/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
     <a href="https://www.youtube.com/" target="_blank">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      {/* <ul>
        <li>
        <CustomLink to="/Home">Home</CustomLink>
        </li>
        <li>
        <CustomLink to="/About">About</CustomLink>
        </li>
        <li>
        <CustomLink to="/Events">Recipes</CustomLink>
        </li>
        <li>
        <CustomLink to="/Tags">Tags</CustomLink>
        </li>
        <li>
        <CustomLink to="/Contact">Contact</CustomLink>
        </li>
      </ul> */}
      <p className="">Home</p>
      <p className="">About</p>
      <p className="">Recipes</p>
      <p className="">Tags</p>
      <p className="">Contact</p>
      <p>
        All Right Reserved  ©
        <span id="currentYear" className="ml-1">{currentYear}</span>
        Simple Bites</p>
    </footer>
  );
}
