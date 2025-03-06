import React, { useRef } from "react";
import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CardAnimatedLogo from "./cardAnimated";
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

        <CardAnimatedLogo
          text="Web Projects"
          logoSRC="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        />

        <div className="info">
          <div className="links">
            <a href="https://github.com/shreyasgadhe">
              <Github color="antiquewhite" />
            </a>
            <a href="https://www.linkedin.com/in/shreyas-gadhe/">
              <Linkedin color="antiquewhite" />
            </a>
            <a href="mailto:gadheshreyas@gmail.com">
              <Mail color="antiquewhite" />
            </a>
          </div>
          <div className="pfp"></div>
          <h1>SHREYAS GADHE</h1>
          <p className="desc">Front-End Engineer</p>
          <div className="nav"></div>
        </div>
        <CardAnimatedLogo
          text="Blender Projects"
          logoSRC="https://png.pngtree.com/png-vector/20230418/ourmid/pngtree-donut-afternoon-tea-dessert-shop-transparent-png-image_6708371.png"
        />
      </div>
    </>
  );
}
