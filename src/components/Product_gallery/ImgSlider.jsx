import styled from "styled-components";
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
    <SliderContainer>
      <Title>Black Friday Special Offer!</Title>
      <StyledSliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <StyledThumbnail
                src={img}
                alt={`Thumbnail ${index + 1}`}
                isActive={index === currentIndex}
                onClick={() => {
                  sliderRef.current.slickGoTo(index);
                  onSelect(index);
                }}
              />
            </div>
          ))}
        </Slider>
      </StyledSliderWrapper>

      <StyledMainImage
        src={images[currentIndex]}
        alt="Main Image"
        onClick={handleMainImageClick}
      />
    </SliderContainer>
  );
};
ImgSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  onMainImageClick: PropTypes.func.isRequired,
};

export default ImgSlider;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2c2c2c;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledSliderWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  
  .slick-prev:before, .slick-next:before {
    color: #ffd700;
    font-size: 30px;
  }
`;

const StyledMainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(255, 215, 0, 0.6);
  margin-top: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledThumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 2px solid ${(props) => (props.isActive ? "#FFD700" : "transparent")};
  cursor: pointer;
  margin: 10px auto;
  border-radius: 5px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #ffd700;
  }
`;
