import React from "react";
import { useRef } from "react";
import GSAP from "gsap";

import Card from "./card";

export default function BlenderSection({ anyref }) {
  const handleMouseMove = (e) => {
    GSAP.to(".cursor", {
      x: e.clientX,
      y: e.clientY,
      duration: 3,
      ease: "back.out",
    });
  };

  return (
    <>
      <div ref={anyref} onMouseMove={handleMouseMove} className="world">
        <img
          className="cursor"
          src="https://png.pngtree.com/png-vector/20230418/ourmid/pngtree-donut-afternoon-tea-dessert-shop-transparent-png-image_6708371.png"
          alt="donut"
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
