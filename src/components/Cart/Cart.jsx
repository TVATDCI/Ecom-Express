import { use } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const Cart = () => {
  const { state: cart, dispatch } = use(ProductContext);
  const navigate = useNavigate();

  if (!cart || cart.length === 0) {
    return (
      <div className="mt-50 text-center text-xl">
        No products in the cart
      </div>
    );
  }
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  console.log(total);

  const handleQuantityChange = (e, product) => {
    if (e.target.value < 1) {
      return;
    }
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id: product.id, quantity: Number(e.target.value) },
    });
  }

  return (
    <div className="flex flex-col items-center p-2.5 sm:p-4 md:p-5 mt-10 md:mt-20 bg-[#f9f9f9] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="flex flex-col gap-5 justify-center w-full max-w-[800px]">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row items-center md:items-center border border-[#ffd700] rounded-lg p-3 md:p-4 w-full bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-20 md:w-24 h-auto rounded-lg mb-2.5 md:mb-0 md:mr-5"
            />
            <div className="flex flex-col justify-center text-left w-full">
              <h2 className="text-base sm:text-lg text-[#c19a6b] font-semibold m-0">Name: {product.title}</h2>
              <p className="text-xs sm:text-sm text-[#666] my-1">
                Description: {product.description}
              </p>

              <p className="text-xs sm:text-sm text-[#333] mt-1">Price: ${product.price}</p>
              <p className="text-xs sm:text-sm text-[#333] mt-1">Quantity: {product.quantity}</p>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(e, product)}
                className="w-12 sm:w-16 p-1 mt-1 border border-[#ffd700] rounded text-center text-xs sm:text-sm text-[#333] transition-colors duration-300 focus:border-[#c19a6b] focus:outline-none"
              />
              <p className="text-xs sm:text-sm text-[#333] mt-1 font-bold">
                Total Price: ${product.quantity * product.price}
              </p>

              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_PRODUCT", payload: product.id })
                }
                className="bg-[#a52a2a] text-white w-20 md:w-24 border-none rounded py-1.5 px-3 md:px-4 cursor-pointer mt-2.5 text-xs sm:text-sm transition-colors duration-300 hover:bg-[#ff1a1a]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg sm:text-xl md:text-2xl text-[#333] mt-5 font-bold text-center">Total: ${total}</p>
      <div className="flex gap-5 mt-5 justify-center flex-wrap w-full md:w-auto">
        <button 
          onClick={() => navigate("/login")}
          className="bg-[#8b4513] text-white font-bold py-2 px-4 md:py-2.5 md:px-5 rounded transition-colors duration-300 hover:bg-[#a0522d] text-sm sm:text-base w-full sm:w-auto"
        >
          Checkout
        </button>
        <button 
          onClick={() => navigate("/products")}
          className="bg-[#8b4513] text-white font-bold py-2 px-4 md:py-2.5 md:px-5 rounded transition-colors duration-300 hover:bg-[#a0522d] text-sm sm:text-base w-full sm:w-auto"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Cart;
