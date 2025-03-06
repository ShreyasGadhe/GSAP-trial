import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./cardAnimated.css";

export default function CardAnimatedLogo({ logoSRC, text }) {
  const cardRef = useRef();
  const logoRef = useRef();

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      height: 200,
      ease: "back.out",
      textAlign: "center",
    });
    gsap.to(
      logoRef.current,

      {
        left: 30,
        top: -10,
        opacity: 50,
        rotate: 360,
        duration: 2,
        ease: "power3.out",
      }
    );
  };
  // change the class of div to something other than card
  return (
    <div onMouseEnter={handleMouseEnter} ref={cardRef} className="card">
      <img src={logoSRC} alt="logo" ref={logoRef} />
      <h1>{text}</h1>
    </div>
  );
}
