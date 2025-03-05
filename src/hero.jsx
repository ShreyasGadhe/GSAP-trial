import React, { useRef } from "react";
import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
        <div className="info">
          <div className="pfp"></div>
          <h1>SHREYAS GADHE</h1>
          <p className="desc">Front-End Engineer</p>
        </div>
      </div>
    </>
  );
}
