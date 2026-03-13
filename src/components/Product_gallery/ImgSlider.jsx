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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleMainImageClick = () => {
    onMainImageClick();
  };

  return (
    <div className="img-slider-container">
      <h1 className="img-slider-title">
        Black Friday Special Offer!
      </h1>
      <div className="img-slider-wrapper">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className="img-slider-item">
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => {
                  sliderRef.current.slickGoTo(index);
                  onSelect(index);
                }}
                className={`img-slider-thumbnail ${index === currentIndex ? 'active' : ''}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <img
        src={images[currentIndex]}
        alt="Main Image"
        onClick={handleMainImageClick}
        className="img-slider-main-image"
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
