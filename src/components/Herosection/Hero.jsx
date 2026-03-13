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
      className="flex w-full flex-col lg:flex-row items-center lg:items-end justify-center text-white bg-cover bg-center bg-no-repeat h-screen px-4"
      style={{
        backgroundImage: `url('/wallpaper.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center glass-panel p-6 w-full max-w-lg lg:w-1/2 mb-20">
        <h2
          className="text-2xl md:text-3xl font-bold mb-3 text-center"
          style={{ color: "rgb(245, 208, 144)" }}
        >
          &quot;Unbeatable Black Friday Deals—Shop Now and Save Big!&quot;
        </h2>
        <p className="text-lg md:text-xl mb-3 text-center" style={{ color: "rgba(176, 38, 55,0.8)" }}>
          &quot;Black Friday Exclusive: Up to 30% Off New Arrivals!&quot;
        </p>
        <Button onClick={handleClick}>SHOP NOW</Button>
      </div>
    </Section>
  );
};

export default Hero;
