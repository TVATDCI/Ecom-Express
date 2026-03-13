import { useEffect, use } from 'react';
import { ProductContext } from '../../context/ProductContext'

const Trending_products = () => {
  const { products, setProducts } = use(ProductContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=90&limit=6')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [setProducts])

  return (
    <div className="text-center mt-12 px-4 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FFD700] mb-10 uppercase tracking-widest animate-[scroll_10s_linear_infinite] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.7)] whitespace-nowrap">
        Best Sellers
      </h2>
      <div className="bg-gradient-to-br from-[#0d0d0d] to-[#333] flex flex-wrap justify-center gap-4 md:gap-5 my-8 p-6 rounded-2xl shadow-2xl">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="w-[150px] sm:w-[200px] md:w-[250px] h-[250px] sm:h-[300px] md:h-[350px] p-2.5 sm:p-4 md:p-5 mb-12 rounded-xl bg-gradient-to-br from-[#2B2B2B] to-[#1A1A1A] border-2 border-[#C0A062] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_15px_rgba(255,215,0,0.5)] hover:brightness-110 group"
          >
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-full h-1/2 sm:h-[55%] md:h-3/5 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#C9A635] mt-4 uppercase tracking-wider transition-colors duration-300 group-hover:text-[#ed9e28] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#efc688] after:to-[#f2970e] after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              {product.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#D2B48C] mt-2.5 font-bold uppercase tracking-tight transition-all duration-300 hover:text-[#ff2e5a] hover:scale-105">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending_products;
