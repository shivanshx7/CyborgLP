import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Event() {
    
    useGSAP(() => {
        const items = gsap.utils.toArray(".kks");

        items.forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                y: 30, 
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });
    });

    const lineright = <svg width="396" height="55" viewBox="0 0 396 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="45.9999" r="9" fill="white" />
                        <path d="M10.5 44.4999L56.5 4.49988" stroke="#FFFDFD" stroke-width="7" />
                        <line x1="53.9797" y1="5.4826" x2="395.98" y2="3.49999" stroke="white" stroke-width="7" />
                    </svg>;
    const lineleft = <svg width="396" height="55" viewBox="0 0 396 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="9" transform="matrix(-1 0 0 1 396 36.9998)" fill="white"/>
                        <path d="M385.5 44.4998L339.5 4.49982" stroke="#FFFDFD" stroke-width="7"/>
                        <line y1="-3.5" x2="342.006" y2="-3.5" transform="matrix(-0.999983 -0.005797 -0.005797 0.999983 342 8.98248)" stroke="white" stroke-width="7"/>
                    </svg>;

    return (
        <div className="h-[95vh] flex justify-between items-center w-[100%]">
            <div className="w-[30vw] h-[80vh] relative right-[210px] flex flex-col justify-center gap-5">
                <div className="kks h-[25%] flex flex-col justify-between">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#home" className="nav-link bgoper" aria-label="Go to Home">HOME</a></div>
                    <div className="w-[100%] h-[33%] flex justify-end">{lineleft}</div>
                </div>
                <div className="kks h-[25%]">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#events" className="nav-link bgoper" aria-label="Go to Events">EVENTS</a></div>
                    <div className="w-[100%] h-[33%] flex justify-end">{lineleft}</div>
                </div>
                <div className="kks h-[25%]">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#contact" className="nav-link bgoper" aria-label="Go to Contact">CONTACT</a></div>
                    <div className="w-[100%] h-[33%] flex justify-end">{lineleft}</div>
                </div>
                <div className="kks h-[25%]">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#archives" className="nav-link bgoper" aria-label="Go to Archives">ARCHIVES</a></div>
                    <div className="w-[100%] h-[33%] flex justify-end">{lineleft}</div>
                </div>

            </div>
            <div className="w-[30vw] h-[80vh] relative left-[190px] flex flex-col justify-center gap-5">
                <div className="kks h-[25%]">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#sponsors" className="nav-link bgoper" aria-label="Go to Sponsors">SPONSORS</a></div>
                    <div className="w-[100%] h-[33%] flex justify-start">{lineright}</div>
                </div>
                <div className="kks h-[25%]">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#about" className="nav-link bgoper" aria-label="Go to About Us">ABOUT US</a></div>
                    <div className="w-[100%] h-[33%] flex justify-start">{lineright}</div>
                </div>
                <div className="kks h-[25%]">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#schedule" className="nav-link bgoper" aria-label="Go to Schedule">SCHEDULE</a></div>
                    <div className="w-[100%] h-[33%] flex justify-start">{lineright}</div>
                </div>
                <div className="kks h-[25%]">
                    <div className="ggs w-[100%] h-[66%] text-[#FFFDFD] text-[40px] flex justify-center items-end font-extrabold tracking-wide pb-[15px] font-necosmic"><a href="#store" className="nav-link bgoper" aria-label="Go to Store">STORE</a></div>
                    <div className="w-[100%] h-[33%] flex justify-start">{lineright}</div>
                </div>

            </div>
        </div>
    );
}