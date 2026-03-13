import { use } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const Cart = () => {
  const { state: cart, dispatch } = use(ProductContext);
  const navigate = useNavigate();

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          No products in the cart
        </div>
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
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items-container">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="cart-item-image" 
            />
            <div className="cart-item-details">
              <h2 className="cart-item-title">{product.title}</h2>
              <p className="cart-item-description">
                {product.description}
              </p>
              <p className="cart-item-price">Price: ${product.price}</p>
              <p className="cart-item-quantity">Quantity: {product.quantity}</p>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(e, product)}
                className="cart-quantity-input"
                min="1"
              />
              <p className="cart-item-total">
                Total: ${product.quantity * product.price}
              </p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_PRODUCT", payload: product.id })
                }
                className="cart-remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="cart-total">Grand Total: ${total}</p>
      <div className="cart-actions">
        <button 
          onClick={() => navigate("/login")}
          className="cart-btn"
        >
          Checkout
        </button>
        <button 
          onClick={() => navigate("/products")}
          className="cart-btn"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
