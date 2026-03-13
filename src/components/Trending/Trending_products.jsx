import { useEffect, use } from "react";
import { ProductContext } from "../../context/ProductContext";

const Trending_products = () => {
  const { products, setProducts } = use(ProductContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=90&limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [setProducts]);

  return (
    <div className="trending-container">
      <h2 className="trending-title">Best Sellers</h2>
      <div className="trending-grid">
        {products.map((product) => (
          <div key={product.id} className="trending-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="trending-card-image"
            />
            <h3 className="trending-card-title">{product.title}</h3>
            <p className="trending-card-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending_products;
