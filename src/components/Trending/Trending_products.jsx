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
      <h2 className="text-[1.8rem] min-[375px]:text-[2rem] md:text-[2.5rem] font-bold text-[#FFD700] mb-10 uppercase tracking-[2px] animate-[scroll_10s_linear_infinite] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.7)] whitespace-nowrap">
        Best Sellers
      </h2>
      <div className="bg-gradient-to-br from-[#0d0d0d] to-[#333] flex flex-wrap justify-center gap-2.5 min-[375px]:gap-4 md:gap-5 my-8 p-6 rounded-2xl shadow-[0px_8px_20px_rgba(0,0,0,0.5)]">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="w-[150px] min-[768px]:w-[200px] min-[1024px]:w-[250px] h-[250px] min-[768px]:h-[300px] min-[1024px]:h-[350px] p-2.5 min-[768px]:p-4 min-[1024px]:p-5 mb-12 rounded-xl bg-gradient-to-br from-[#2B2B2B] to-[#1A1A1A] border-2 border-[#C0A062] shadow-[0px_4px_8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[rgba(255,223,0,0.6)] hover:brightness-110 group animate-[pulseEffect_3s_ease-in-out_infinite] overflow-hidden"
          >
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-full h-1/2 min-[768px]:h-[55%] min-[1024px]:h-3/5 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-sm min-[768px]:text-base min-[1024px]:text-[1.2rem] font-semibold text-[#C9A635] mt-4 uppercase tracking-[1.5px] transition-colors duration-300 group-hover:text-[rgb(237,158,40)] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[rgb(239,198,136)] after:to-[rgb(242,151,14)] after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 drop-shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
              {product.title}
            </h3>
            <p className="text-sm min-[768px]:text-base min-[1024px]:text-[1.2rem] text-[#D2B48C] mt-2.5 font-bold uppercase tracking-[0.5px] transition-all duration-300 hover:text-[#ff2e5a] hover:scale-105">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending_products;
