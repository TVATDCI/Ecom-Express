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
      <div className="flex justify-center md:justify-end my-5">
        <select 
          onChange={handleSortChange}
          className="p-2 border border-[#ffd700] rounded bg-white text-sm sm:text-base text-[#333] focus:outline-none focus:ring-2 focus:ring-[#c19a6b]"
        >
          <option value="default">Select sorting options</option>
          <option value="price">Sort by Price</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products
          .slice(0, 80)
          .filter((product) => toggle === "all" || product.category === toggle)
          .map((product) => (
            <div key={product.id} className="border border-[#ffd700] rounded-lg p-4 text-center shadow-md bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold my-2 text-[#c19a6b]">{product.title}</h3>
              <p className="text-base md:text-lg text-[#333] font-serif my-2">${product.price}</p>
              <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg mb-2.5 object-cover aspect-square"
              />

              <button 
                onClick={() => navigate(`/products/${product.id}`)}
                className="bg-gradient-to-br from-[#8b4513] to-[#a0522d] text-[#f5f5f5] py-2 px-3 rounded-md cursor-pointer text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                View Product
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  toggle: PropTypes.string.isRequired,
};

export default ProductCard;
