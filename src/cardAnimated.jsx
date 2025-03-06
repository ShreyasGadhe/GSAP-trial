import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./cardAnimated.css";

export default function CardAnimatedLogo({ logoSRC, text }) {
  const cardRef = useRef();
  const logoRef = useRef();
  const textRef = useRef();
  const tlRef = useRef();

  useEffect(() => {
    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current.to(cardRef.current, {
      height: 200,
      ease: "back.out",
      textAlign: "center",
      borderRadius: 0,
    });
    tlRef.current.to(
      logoRef.current,
      {
        left: 70,
        top: -10,
        opacity: 50,
        rotate: 360,
        duration: 2,
        ease: "power3.out",
      },
      "<"
    );
    tlRef.current.to(
      textRef.current,
      {
        fontSize: 30,
        ease: "back.out",
        alignSelf: "bottom",
      },
      "<"
    );
  }, []);

  const handleMouseEnter = () => {
    tlRef.current.timeScale(1).play();
  };

  const handleMouseLeave = () => {
    // tlRef.current.progress(0);
    tlRef.current.timeScale(3).reverse();
    // tlRef.current.pause();
  };

  // change the class of div to something other than card
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      className="card"
    >
      <img src={logoSRC} alt="logo" ref={logoRef} />
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
}
