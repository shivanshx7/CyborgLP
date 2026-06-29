import React, { useRef, useEffect, useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger"
import Landing from './components/Landing';
import Event from './components/Event';
import CyberHeader from './components/CyberHeader';
import StatsHUD from './components/StatsHUD';
import SocialHub from './components/SocialHub';
import techfest from './assets/techfest.svg'

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 35;

export default function App() {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  
  useEffect(() => {
    const frameImages = [];
    let loadedCount = 0;

   
    const loadImage = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `/frames/ezgif-frame-${String(index).padStart(3, "0")}.png`;
        
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          
          console.error(`Failed to load frame ${index}`);
          resolve(img); 
        };
      });
    };

   
    const promises = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      promises.push(loadImage(i));
    }

    
    Promise.all(promises).then((loadedImages) => {
      setImages(loadedImages);
      setIsLoading(false); 
    });
  }, []);

  useEffect(() => {
    
    if (isLoading || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")

    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    context.scale(scale, scale)

    const frameState = { frame: 0 }

    const render = () => {
      const img = images[frameState.frame];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          canvas.width / scale,
          canvas.height / scale
        );
      }
    };

  
    render();


    const trigger = gsap.to(frameState, {
      frame: images.length - 1,
      snap: "frame",
      ease: 'none',
      scrollTrigger: {
        start: "top top",
        end: "5000px",
        scrub: true
      },
      onUpdate: render
    });

   
    return () => {
      trigger.scrollTrigger && trigger.scrollTrigger.kill();
    };

  }, [images, isLoading]);
  return (
    <div style={{ position: "relative" }}>

      
      {isLoading && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          color: "#00ffcc",
          fontFamily: "monospace"
        }}>
          
          <div style={{
            width: "50px",
            height: "50px",
            border: "4px solid #111",
            borderTop: "4px solid #00ffcc",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "15px"
          }} />
          <p style={{ letterSpacing: "2px", fontSize: "14px" }}>INITIALIZING CYBORG CORE...</p>
          
          
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />

      <CyberHeader />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className='flex flex-col justify-between ' style={{ height: "6000px", width: "100%" }}>
          <StatsHUD />
          <Landing />

          <div className="bottom-overlay-row ">
            <SocialHub />
          </div>

          <Event />
        </div>
      </div>

    </div>
  );
}