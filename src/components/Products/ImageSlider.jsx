import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Herosection/Button";
// Image Slider Container (inside ProductImgCon)
const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 0;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
const SliderImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const ViewButton = styled.button`
 background-color: #8b4513;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #a0522d;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

function ImageSlider({ images, onThumbnailClick }) {
  const navigate = useNavigate();
  const handleClick = (image) => {
    // useNavigate hook to navigate to the product page and pass the image id as a parameter
    navigate(`/products/${image.id}`);
  };
  return (
    <>
      <SliderContainer className=" ">
        {images.slice(0, 6).map((image, index) => (
          <SliderImage
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            onClick={() => onThumbnailClick(image)}
          />
        ))}
      </SliderContainer>
      <ViewButton onClick={() => navigate("/products")}>View all products</ViewButton>
    </>
  );
}
export default ImageSlider;