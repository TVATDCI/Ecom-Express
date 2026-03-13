import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [toggle, setToggle] = useState("all");

  const categories = [
    { id: "all", label: "ALL" },
    { id: "furniture", label: "FURNITURE" },
    { id: "fragrances", label: "FRAGRANCE" },
    { id: "groceries", label: "GROCERIES" },
    { id: "home-decoration", label: "HOME DECORATION" },
  ];

  return (
    <div>
      <div className="products-categories">
        {categories.map((cat, index) => (
          <div key={cat.id} className="products-category-item">
            {index > 0 && <div className="products-category-divider" />}
            <div
              onClick={() => setToggle(cat.id)}
              className={`products-category-btn ${toggle === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </div>
          </div>
        ))}
      </div>
      <ProductCard toggle={toggle} />
    </div>
  );
};

export default Products;
