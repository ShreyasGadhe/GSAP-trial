import React from "react";
import GSAP from "gsap";
import Hero from "./hero";
import Card from "./card";

export default function App() {
  const handleMouseMove = (e) => {
    console.log(e);
    GSAP.to(".cursor", {
      x: e.clientX,
      y: e.clientY,
      duration: 3,
      ease: "back.out",
    });
  };
  return (
    <>
      <Hero />
      <div onMouseMove={handleMouseMove} className="world">
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
