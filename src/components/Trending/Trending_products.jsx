import { useEffect, use } from 'react';
import { ProductContext } from '../../context/ProductContext'
import './Trending.css'





const Trending_products = () => {



    const { products,setProducts } = use(ProductContext);
    console.log(products)
  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=90&limit=6')
    .then(res => res.json())
    .then(data => setProducts(data.products))
    }, [setProducts])


  return (
    <div>
    <h2 className='best_seller'>Best Sellers</h2>
    <div className="product-card">
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <img src={product.thumbnail} alt={product.title} />
        
       
        </div>
       
      ))} 
      </div>  
  
    </div>
  )
}

export default Trending_products