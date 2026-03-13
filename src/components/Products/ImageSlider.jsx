import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ImageSlider = ({ images, onThumbnailClick }) => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex overflow-x-auto gap-2.5 mt-5 p-2.5 scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            onClick={() => onThumbnailClick ? onThumbnailClick(image) : null}
            className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 object-cover cursor-pointer rounded-lg transition-transform duration-300 hover:scale-110 shrink-0"
          />
        ))}
      </div>
      <button 
        onClick={() => navigate("/products")}
        className="bg-[#8b4513] text-white py-3 px-6 rounded-lg cursor-pointer text-lg font-bold mt-5 transition-all duration-300 hover:bg-[#a0522d] hover:scale-105 w-full md:w-auto text-center"
      >
        View all products
      </button>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onThumbnailClick: PropTypes.func
};

export default ImageSlider;
