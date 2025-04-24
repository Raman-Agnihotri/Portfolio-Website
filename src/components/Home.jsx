import React, { useEffect, useRef } from 'react'
import myimage from './data/hero.json'
import pdf from '../pdf/resume.pdf'
import Typed from "typed.js";



const Home = () => {
  const typedref=useRef(null)
useEffect(()=>{

   const options={
    strings: ["जय श्री राम मित्रों", "मेरे पोर्टफोलियो में आपका स्वागत है", "मैं आपका रमन अग्निहोत्री ", "फ्रंटएंड डेवलपर"]
    ,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
   }
   const typed= new Typed(typedref.current,options)
  return ()=>{
   typed.destroy()
  }
},[])
  return (
 <>
 <div className="container home" id="home">
  <div className="left"
   data-aos="fade-up-right"
data-aos-duration="1000"

  ><h1 ref={typedref}>  </h1>
  <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
  </div>
  <div className="right">
    <div className="img"
   data-aos="fade-up-left"
data-aos-duration="1000"
    >
   <img src={`/assets/${myimage.imgSrc}`} alt="hero" />
    </div>
    
  </div>

 </div>
 </>
  )
}

export default Home
