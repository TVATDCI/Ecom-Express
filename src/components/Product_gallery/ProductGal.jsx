import React from "react";
import Button from "../Herosection/Button";
const ProductGal = ({ selectedImage, isVisible, toggleVisibility }) => {
  if (!isVisible) return null; // Don't render anything if not visible
  return (
    <div
      style={{
        position: "fixed", // Fixed position to overlay the screen
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dimmed background
        zIndex: 9999, // Ensure it overlays above other content
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={toggleVisibility} // Close the gallery when clicking anywhere on the overlay
    >
      <div
        className="flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "80%", // You can adjust the width of the image gallery
          height: "80%", // You can adjust the height of the image gallery
          cursor: "zoom-out", // Optional: to give a zoom-out cursor when hovering over the image
        }}
      >
        <Button onClick={toggleVisibility}>Close</Button>
      </div>
    </div>
  );
};
export default ProductGal;