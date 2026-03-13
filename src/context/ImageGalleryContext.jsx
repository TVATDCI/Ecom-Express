import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ImageGalleryContext = createContext();

const ImageGalleryContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [mainImageId, setMainImageId] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleImagesFetched = (fetchedImages, mainImageId) => {
    setImages(fetchedImages);
    setMainImageId(mainImageId);
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const handleMainImageClick = () => {
    setIsVisible(true);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const value = {
    images,
    mainImageId,
    selectedImageIndex,
    isVisible,
    handleImagesFetched,
    handleImageSelect,
    handleMainImageClick,
    toggleVisibility,
  };

  return (
    <ImageGalleryContext.Provider value={value}>
      {children}
    </ImageGalleryContext.Provider>
  );
};

ImageGalleryContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGalleryContextProvider;
