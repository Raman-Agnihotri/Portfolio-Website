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
          <a href="https://www.instagram.com/raman_agnihotri_?igsh=MTd1Z3BxNjc5Znhh" className="items" target="_blank" rel="noopener noreferrer">
  <FaInstagramSquare className="icons" />
</a>
<a href="https://www.facebook.com/raman.agnihotri.7564" className="items" target="_blank" rel="noopener noreferrer">
  <CiFacebook className="icons" />
</a>
<a href="https://www.linkedin.com/in/raman-agnihotri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="items" target="_blank" rel="noopener noreferrer">
  <FaLinkedin className="icons" />
</a>
<a href="https://x.com/agnih120?t=f9cvr6QO86qC_qwhjKwU6w&s=09" className="items" target="_blank" rel="noopener noreferrer">
  <FaSquareXTwitter className="icons" />
</a>
<a href="https://github.com/Raman-Agnihotri" className="items" target="_blank" rel="noopener noreferrer">
  <FaGithub className="icons" />
</a>
<a href="mailto:ramanagnihotri.mact@gmail.com" className="items">
  <SiGmail className="icons" />
</a>

        </div>
      </div>
    </>
  )
}

export default Contact
