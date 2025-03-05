import React, { useRef } from "react";
import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Layout,
  Database,
  Terminal,
} from "lucide-react";

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
          <div className="links">
            <a href="https://github.com/shreyasgadhe">
              <Github color="antiquewhite" />
            </a>
            <a href="https://www.linkedin.com/in/shreyasgadhe/">
              <Linkedin color="antiquewhite" />
            </a>
            <a href="mailto:gadheshreyas@gmail.com">
              <Mail color="antiquewhite" />
            </a>
          </div>
          <div className="pfp"></div>
          <h1>SHREYAS GADHE</h1>
          <p className="desc">Front-End Engineer</p>
        </div>
      </div>
    </>
  );
}
