import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import Card from "./card";

export default function WebSection({ anyref }) {
  //   const handleMouseMove = (e) => {
  //     GSAP.to(".cursor", {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 3,
  //       ease: "back.out",
  //     });
  //   };
  const reactLogoRef = useRef();
  useGSAP(() => {
    gsap.from(reactLogoRef.current, {
      left: 0,
      duration: 7,
      delay: 0.5,
      ease: "power1.inOut",
      repeat: Infinity,
      rotation: 360,
      repeatDelay: 1,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <div ref={anyref} className="web">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          className="react-logo"
          ref={reactLogoRef}
        />
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
