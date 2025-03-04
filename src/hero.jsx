import React, { useRef } from "react";
import "./index.css";
import gsap from "gsap";

export default function Hero() {
  const cursorRef = useRef();

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <div onMouseMove={handleMouseMove} className="hero">
        <div className="glass"></div>
        <div ref={cursorRef} className="hero-cursor"></div>
        <h1>HELLO WORLD</h1>
      </div>
    </>
  );
}
