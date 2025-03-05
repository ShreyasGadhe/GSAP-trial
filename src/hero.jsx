import React, { useRef } from "react";
import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const cursorRef = useRef();
  const reactLogoRef = useRef();

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
    });
  };

  useGSAP(() => {
    gsap.from(reactLogoRef.current, {
      left: 0,
      duration: 10,
      delay: 0.5,
      ease: "power3.inOut",
      repeat: 2,
      rotation: 360,
      repeatDelay: 1,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        className="react-logo"
        ref={reactLogoRef}
      />
      <div onMouseMove={handleMouseMove} className="hero">
        <div className="glass"></div>
        <div ref={cursorRef} className="hero-cursor"></div>
        <h1>HELLO WORLD</h1>
      </div>
    </>
  );
}
