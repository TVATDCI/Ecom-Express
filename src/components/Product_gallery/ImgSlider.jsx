import PropTypes from "prop-types";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = ({ images, onSelect, onMainImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(images.length, 3),
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
      onSelect(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(images.length, 2),
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleMainImageClick = () => {
    onMainImageClick();
  };

  return (
    <div className="flex flex-col items-center p-5 bg-[#2c2c2c] overflow-hidden rounded-xl shadow-2xl w-full max-w-[600px] mx-auto">
      <h1 className="text-2xl sm:text-3xl text-[#ffd700] mb-5 text-center font-bold uppercase">
        Black Friday Special Offer!
      </h1>
      <div className="w-full px-10 [&_.slick-prev:before]:text-[#ffd700] [&_.slick-next:before]:text-[#ffd700] [&_.slick-prev:before]:text-3xl [&_.slick-next:before]:text-3xl">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => {
                  sliderRef.current.slickGoTo(index);
                  onSelect(index);
                }}
                className={`w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover border-2 cursor-pointer rounded-md transition-all duration-300 mx-auto hover:scale-105 ${
                  index === currentIndex ? "border-[#FFD700]" : "border-transparent hover:border-[#ffd700]"
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <img
        src={images[currentIndex]}
        alt="Main Image"
        onClick={handleMainImageClick}
        className="w-full max-w-[400px] h-auto aspect-square object-cover rounded-xl shadow-[0_4px_8px_rgba(255,215,0,0.6)] mt-8 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>
  );
};
ImgSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  onMainImageClick: PropTypes.func.isRequired,
};

export default ImgSlider;
