import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger"
import logo from "../assets/logotechfest.png"
gsap.registerPlugin(ScrollTrigger);

function Landing() {
    

gsap.from(".heading", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".heading",
    start: "top center",
    toggleActions: "play none none none",
    
  }
});

  return (
    <div 
        className=' headline text-[100px] relative  top-[28%] h-[25%] flex justify-center items-start  '
    >
       <div
       className='heading sticky top-[200px] z-10 ml-[15px]  text-[300px]'>
        <img src={logo}
        alt="Techfest Logo" 
        className="object-contain antialiased"
        style={{ 
            imageRendering: 'auto', 
            backfaceVisibility: 'hidden' 
        }}
        ></img>
        </div> 
    </div>
  )
}

export default Landing