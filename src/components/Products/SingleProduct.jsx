import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import ImageSlider from "./ImageSlider";
import { useEffect } from "react";

/* const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 40px 20px;
  background-color: #f7f8fa;
  min-height: 100vh;
  margin-top: 70px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImgCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin-right: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    padding: 0;
  }
`;
const ProductImage = styled.img`
  width: 100%;
  max-width: 600px; 
  height: auto;
  border-radius: 8px;
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.8);
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  max-width: 600px;

  text-align: left;
  border-radius: 8px;
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.8);
`;
const ProductTitle = styled.h1`
  font-size: 2em;
  color: #ffd700; 
  font-weight: bold;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: left;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #c19a6b;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
`;

const ProductInfo = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 375px) {
    font-size: 0.75em;
  }
`;

const ReviewContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: left;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: #c19a6b;
  font-size: 1.2em;
  margin-right: 5px;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: #c19a6b;
`;

const ReviewText = styled.p`
  color: #333; 
  opacity: 1; 
  margin: 5px 0;
`;

const AddButton = styled.button`
  background-color: #8b4513;
  color: #f5f5f5;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  align-self: flex-start;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a0522d;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`; */
const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px 15px;
  background-color: #f7f8fa;
  min-height: 100vh;
  margin-top: 70px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImgCon = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.8);
`;

const ProductDetails = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
  padding: 20px;
  max-width: 700px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProductTitle = styled.h1`
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
  margin: 0;
  text-align: left;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #555;
  line-height: 1.5;
  padding: 0 10px;
  text-align: left;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #c19a6b;
  font-weight: bold;
  padding: 0 10px;
  text-align: left;
`;

const ProductInfo = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0;
  padding: 0 10px;
  text-align: left;
`;

const ReviewContainer = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: #ffc107;
  font-size: 1.2em;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: #555;
`;

const ReviewText = styled.p`
  color: #333;
  margin: 5px 0;
`;

const AddButton = styled.button`
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



function SingleProduct() {
  const { products, dispatch } = useContext(ProductContext);
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(""); // add the updated state to manage the main image

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
    setMainImage(foundProduct?.thumbnail); // Set the main image to the thumbnail
  }, [id, products]);

  if (!product) {
    return (
      <ProductContainer>
        <h2>Product not found</h2>
      </ProductContainer>
    );
  }

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i}>&#9733;</Star>); // Filled star
      } else {
        stars.push(<Star key={i}>&#9734;</Star>); // Empty star
      }
    }
    return stars;
  };
  function handleAddButton(product) {
    dispatch({ type: "ADD_PRODUCT", payload: product });
    setMessage("Product added to cart");
    alert("Product added to cart");
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <ProductContainer>
      <ProductImgCon>
        <ProductImage src={mainImage} alt={product.title} />
        {/* Modifying Image Slider Component */}
        <ImageSlider
          images={product.images}
          onThumbnailClick={handleThumbnailClick}
        />
      </ProductImgCon>

      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          <BoldText>Price:</BoldText> ${product.price}
        </ProductPrice>
        <ProductInfo>
          <BoldText>Category:</BoldText> {product.category}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Shipping Information:</BoldText>{" "}
          {product.shippingInformation}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Availability Status:</BoldText> {product.availabilityStatus}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Warranty Information:</BoldText>{" "}
          {product.warrantyInformation}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Return Policy:</BoldText> {product.returnPolicy}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Minimum Order Quantity:</BoldText>
          {product.minimumOrderQuantity}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Brand:</BoldText> {product.brand}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Quantity in Stock:</BoldText> {product.stock}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Weight:</BoldText> {product.weight}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Arrival Date:</BoldText>
          {new Date(product.meta.createdAt).toLocaleDateString()}
        </ProductInfo>
        <ProductInfo>
          <BoldText>Product Dimensions:</BoldText>
        </ProductInfo>
        {product.dimensions && (
          <div style={{ marginTop: "0px" }}>
            <ProductInfo>
              <BoldText>Height:</BoldText> {product.dimensions.height} cm
            </ProductInfo>
            <ProductInfo>
              <BoldText>Depth:</BoldText> {product.dimensions.depth} cm
            </ProductInfo>
            <ProductInfo>
              <BoldText>Width:</BoldText> {product.dimensions.width} cm
            </ProductInfo>
          </div>
        )}

        <AddButton onClick={() => handleAddButton(product)}>
          Add product
        </AddButton>
        {message && <BoldText>{message}</BoldText>}
      </ProductDetails>
      <ReviewContainer>
        {product.reviews ? (
          product.reviews.map((review, index) => (
            <ReviewBox key={index}>
              <StarRating>{renderStars(review.rating)}</StarRating>
              <ReviewText>
                <BoldText>Reviewer Name:</BoldText> {review.reviewerName}
              </ReviewText>
              <ReviewText>
                <BoldText>Reviewer Email:</BoldText> {review.reviewerEmail}
              </ReviewText>
              <ReviewText>
                <BoldText>Comment:</BoldText> {review.comment}
              </ReviewText>
            </ReviewBox>
          ))
        ) : (
          <p>No Reviews for this item</p>
        )}
      </ReviewContainer>
    </ProductContainer>
  );
}

export default SingleProduct;
