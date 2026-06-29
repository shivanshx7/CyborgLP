import React,{ useRef,useEffect,useState} from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger"
import Landing from './components/Landing';
import Event  from './components/Event';
import CyberHeader from './components/CyberHeader';
import StatsHUD from './components/StatsHUD';
import SocialHub from './components/SocialHub';
import techfest from './assets/techfest.svg'
gsap.registerPlugin(ScrollTrigger); 

const TOTAL_FRAMES = 35 ;

export default function App() {
  const canvasRef = useRef(null)
  const [images, setImages] = useState([])

  useEffect(() => {
  let loadedCount = 0;
  const frameImages = [];

  // This auto-detects Vite or Create React App base paths, defaulting to an absolute "/"
  const baseUrl = import.meta.env?.BASE_URL || process.env?.PUBLIC_URL || "/";
  // Make sure we don't double up slashes if baseUrl ends with one
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    
    // 1. Point to the absolute root path via public directory
    img.src = `${cleanBase}frames/ezgif-frame-${String(i).padStart(3, "0")}.png`;
    
    img.onload = () => {
      loadedCount++;
      if (loadedCount === TOTAL_FRAMES) {
        setImages(frameImages);
      }
    };

    img.onerror = () => {
      console.error(`Deployment failed to find image asset at: ${img.src}`);
    };

    frameImages.push(img);
  }
}, []);

  useEffect(()=>{
    if (images.length === 0) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")

    const scale = window.devicePixelRatio || 1 ;
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    context.scale(scale,scale) 

    const frameState = {frame : 0}
    
    const render = () => {
      const img = images[frameState.frame] ; 
      if (img?.complete){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          canvas.width / scale,
          canvas.height / scale 
        );
      }
    } ;


    if (images[0].complete) {
      render();
    } else {
      images[0].onload = render;
    }


    gsap.to(frameState,{
      frame : images.length - 1,
      snap : "frame",
      ease : 'none',
      scrollTrigger : {
        start : "top top",
        end : "5000px" , 
        scrub : true 
      },
      onUpdate : render
    })

  },[images])

  return (
    <div style={{position:"relative"}}>


      <canvas
        ref={canvasRef}
        style={{
          position:'fixed',
          top:0,
          left: 0,
          width:"100vw",
          height:"100vh",
          zIndex: 1,
        }}
      />


      <CyberHeader />
      


      <div style={{position:"relative", zIndex: 2}}>
        <div className='flex flex-col justify-between ' style={{height:"6000px" , width: "100%"}}>
          
          
          <StatsHUD/>
          <Landing/>


          <div className="bottom-overlay-row ">
            
            <SocialHub />
          </div>

          <Event/>
        </div>
      </div>

    </div>
  );
}