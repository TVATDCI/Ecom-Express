import { useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import PropTypes from "prop-types";

const ProductCard = ({ toggle }) => {
  const { products, setProducts } = use(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    let url = "https://dummyjson.com/products?limit=100";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error("Network response was not ok");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [setProducts]);

  const handleSortPrice = () => {
    const sortedProduct = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProduct);
  }

  const handleSortTitle = () => {
    const sortedProduct = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setProducts(sortedProduct);
  }

  const handleSortChange = (e) => {
    if (e.target.value === "price") {
      handleSortPrice();
    } else if (e.target.value === "title") {
      handleSortTitle();
    }
  }

  return (
    <div className="relative px-4 pb-10">
      <div className="products-sort-container">
        <select 
          onChange={handleSortChange}
          className="products-sort-select"
        >
          <option value="default">Select sorting options</option>
          <option value="price">Sort by Price</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div className="products-grid">
        {products
          .slice(0, 80)
          .filter((product) => toggle === "all" || product.category === toggle)
          .map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-card-title">{product.title}</h3>
              <p className="product-card-price">${product.price}</p>
              <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="product-card-image"
              />

              <button 
                onClick={() => navigate(`/products/${product.id}`)}
                className="product-card-btn"
              >
                View Product
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  toggle: PropTypes.string.isRequired,
};

export default ProductCard;
