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
      <div className="flex bg-[#d4af37] text-[#333] text-xs sm:text-sm md:text-base h-20 sm:h-24 font-medium mt-16 sm:mt-20 overflow-x-auto shadow-lg items-center">
        {categories.map((cat, index) => (
          <div key={cat.id} className="flex h-full items-center">
            {index > 0 && <div className="w-[1.5px] h-full bg-white shrink-0" />}
            <div
              onClick={() => setToggle(cat.id)}
              className={`px-3 sm:px-5 py-2 sm:py-3 cursor-pointer font-semibold transition-all duration-300 h-full flex items-center shrink-0 ${
                toggle === cat.id ? "bg-[#8B4513] text-white" : "hover:bg-[#a0522d] hover:text-[#f5f5f5]"
              }`}
            >
              {cat.label}
            </div>
          </div>
        ))}
      </div>
      <ProductCard toggle={toggle} />
    </div>
  );
}

export default Products;
