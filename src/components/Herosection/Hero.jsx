import React from "react";
import Button from "./Button";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <Section
      id="hero"
      className="flex w-full flex-col items-end justify-center text-white bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage: `url('/wallpaper.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center bg-black bg-opacity-30 p-5 w-1/2">
        <h2 className="text-3xl font-bold mb-3 " style={{color: 'rgb(245, 208, 144)'}}>"Unbeatable Black Friday Deals—Shop Now and Save Big!"</h2>
        <p className="text-xl  mb-3" style={{color: 'rgba(176, 38, 55,0.8)'}} >
        "Black Friday Exclusive: Up to 30% Off New Arrivals!"</p>
        <Button onClick={handleClick}>
          SHOP NOW
        </Button>
      </div>
    </Section>
  );
};

export default Hero;