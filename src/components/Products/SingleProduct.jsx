import { use } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

const SingleProduct = () => {
  const { products, dispatch } = use(ProductContext);
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
    setMainImage(foundProduct?.thumbnail);
  }, [id, products]);

  if (!product) {
    return (
      <div className="single-product-not-found">
        <h2>Product not found</h2>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="single-product-star filled">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="single-product-star">&#9734;</span>);
      }
    }
    return stars;
  };

  const handleAddButton = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
    setMessage("Product added to cart");
    alert("Product added to cart");
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="single-product-container">
      <div className="single-product-image-section">
        <img src={mainImage} alt={product.title} className="single-product-main-image" />
        <ImageSlider
          images={product.images}
          onThumbnailClick={handleThumbnailClick}
        />
      </div>

      <div className="single-product-details-section">
        <h1 className="single-product-title">{product.title}</h1>
        <p className="single-product-description">
          {product.description}
        </p>
        <p className="single-product-price">
          <span>Price:</span> ${product.price}
        </p>
        <div className="single-product-info">
          <p><span>Category:</span> {product.category}</p>
          <p><span>Shipping:</span> {product.shippingInformation}</p>
          <p><span>Availability:</span> {product.availabilityStatus}</p>
          <p><span>Warranty:</span> {product.warrantyInformation}</p>
          <p><span>Return Policy:</span> {product.returnPolicy}</p>
          <p><span>Min Order:</span> {product.minimumOrderQuantity}</p>
          <p><span>Brand:</span> {product.brand}</p>
          <p><span>Stock:</span> {product.stock}</p>
          <p><span>Weight:</span> {product.weight}</p>
          <p><span>Added:</span> {new Date(product.meta.createdAt).toLocaleDateString()}</p>
        </div>
        
        {product.dimensions && (
          <div className="single-product-dimensions">
            <p>Dimensions:</p>
            <div className="single-product-dimensions-list">
              <p><span>Height:</span> {product.dimensions.height} cm</p>
              <p><span>Depth:</span> {product.dimensions.depth} cm</p>
              <p><span>Width:</span> {product.dimensions.width} cm</p>
            </div>
          </div>
        )}

        <button 
          onClick={() => handleAddButton(product)}
          className="single-product-add-btn"
        >
          Add to Cart
        </button>
        {message && <span className="single-product-message">{message}</span>}
      </div>

      <div className="single-product-reviews-section">
        {product.reviews ? (
          product.reviews.map((review, index) => (
            <div key={index} className="single-product-review-card">
              <div className="single-product-stars">{renderStars(review.rating)}</div>
              <p><span>Reviewer:</span> {review.reviewerName}</p>
              <p><span>Email:</span> {review.reviewerEmail}</p>
              <p><span>Comment:</span> {review.comment}</p>
            </div>
          ))
        ) : (
          <p className="single-product-no-reviews">No Reviews for this item</p>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
