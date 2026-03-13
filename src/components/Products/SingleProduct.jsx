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
      <div className="flex justify-around items-start p-8 md:p-4 bg-[#f7f8fa] min-h-screen mt-[70px] gap-5">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-[#ffc107] text-xl">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-[#ffc107] text-xl">&#9734;</span>);
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
    <div className="flex flex-col lg:flex-row justify-around items-start p-4 sm:p-7 md:p-8 bg-[#f7f8fa] min-h-screen mt-[70px] gap-5">
      <div className="flex-[2] flex flex-col items-center w-full max-w-[600px] p-5 rounded-xl bg-white shadow-md">
        <img src={mainImage} alt={product.title} className="w-full max-w-[400px] h-auto rounded-xl bg-white/80" />
        <ImageSlider
          images={product.images}
          onThumbnailClick={handleThumbnailClick}
        />
      </div>

      <div className="flex-[1.5] flex flex-col text-left gap-4 p-5 w-full max-w-[700px] bg-white rounded-xl shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] m-0">{product.title}</h1>
        <p className="text-base text-[#555] leading-relaxed px-2.5">
          {product.description}
        </p>
        <p className="text-xl sm:text-2xl text-[#c19a6b] font-bold px-2.5">
          <span className="font-bold text-[#555]">Price:</span> ${product.price}
        </p>
        <div className="px-2.5 flex flex-col gap-1 text-sm text-[#333]">
          <p><span className="font-bold text-[#555]">Category:</span> {product.category}</p>
          <p><span className="font-bold text-[#555]">Shipping Information:</span> {product.shippingInformation}</p>
          <p><span className="font-bold text-[#555]">Availability Status:</span> {product.availabilityStatus}</p>
          <p><span className="font-bold text-[#555]">Warranty Information:</span> {product.warrantyInformation}</p>
          <p><span className="font-bold text-[#555]">Return Policy:</span> {product.returnPolicy}</p>
          <p><span className="font-bold text-[#555]">Minimum Order Quantity:</span> {product.minimumOrderQuantity}</p>
          <p><span className="font-bold text-[#555]">Brand:</span> {product.brand}</p>
          <p><span className="font-bold text-[#555]">Quantity in Stock:</span> {product.stock}</p>
          <p><span className="font-bold text-[#555]">Weight:</span> {product.weight}</p>
          <p><span className="font-bold text-[#555]">Arrival Date:</span> {new Date(product.meta.createdAt).toLocaleDateString()}</p>
        </div>
        
        {product.dimensions && (
          <div className="px-2.5 text-sm text-[#333]">
            <p className="font-bold text-[#555]">Product Dimensions:</p>
            <div className="ml-2.5">
              <p><span className="font-bold text-[#555]">Height:</span> {product.dimensions.height} cm</p>
              <p><span className="font-bold text-[#555]">Depth:</span> {product.dimensions.depth} cm</p>
              <p><span className="font-bold text-[#555]">Width:</span> {product.dimensions.width} cm</p>
            </div>
          </div>
        )}

        <button 
          onClick={() => handleAddButton(product)}
          className="bg-[#8b4513] text-white py-3 px-6 rounded-lg cursor-pointer text-lg font-bold mt-5 transition-all duration-300 hover:bg-[#a0522d] hover:scale-105 w-full md:w-auto text-center"
        >
          Add product
        </button>
        {message && <span className="font-bold text-[#555] mt-2 block">{message}</span>}
      </div>

      <div className="flex-[1.2] flex flex-col items-center gap-5 p-5 w-full max-w-[500px] bg-white rounded-xl shadow-md text-left">
        {product.reviews ? (
          product.reviews.map((review, index) => (
            <div key={index} className="flex flex-col w-full max-w-[450px] p-4 bg-[#f9f9f9] rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
              <div className="flex items-center">{renderStars(review.rating)}</div>
              <p className="text-[#333] my-1 text-sm">
                <span className="font-bold text-[#555]">Reviewer Name:</span> {review.reviewerName}
              </p>
              <p className="text-[#333] my-1 text-sm">
                <span className="font-bold text-[#555]">Reviewer Email:</span> {review.reviewerEmail}
              </p>
              <p className="text-[#333] my-1 text-sm">
                <span className="font-bold text-[#555]">Comment:</span> {review.comment}
              </p>
            </div>
          ))
        ) : (
          <p>No Reviews for this item</p>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
