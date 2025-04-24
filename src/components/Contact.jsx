import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in-up"
data-aos-duration="1000"
        >
          <a href="#" className="items"><FaInstagramSquare className="icons" /></a>
          <a href="#" className="items"><CiFacebook className="icons" /></a>
          <a href="#" className="items"><FaLinkedin className="icons" /></a>
          <a href="#" className="items"><FaSquareXTwitter className="icons" /></a>
          <a href="https://github.com/Raman-Agnihotri" className="items"><FaGithub className="icons" /></a>
          <a href="mailto:ramanagnihotrimact@gmail.com" className="items"><SiGmail className="icons" /></a>
        </div>
      </div>
    </>
  )
}

export default Contact
