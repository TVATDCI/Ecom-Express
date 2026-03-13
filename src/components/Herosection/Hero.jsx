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
      className="hero-container"
      style={{
        backgroundImage: `url('/wallpaper.jpg')`,
      }}
    >
      <div className="hero-content">
        <h2 className="hero-title">
          &quot;Unbeatable Black Friday Deals—Shop Now and Save Big!&quot;
        </h2>
        <p className="hero-subtitle">
          &quot;Black Friday Exclusive: Up to 30% Off New Arrivals!&quot;
        </p>
        <Button onClick={handleClick}>SHOP NOW</Button>
      </div>
    </Section>
  );
};

export default Hero;
