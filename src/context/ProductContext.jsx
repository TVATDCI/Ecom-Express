import { createContext } from "react";
import { useState, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT": {
        let existingProductIndex = state.findIndex(
          (product) => product.id === action.payload.id
        );
        if (existingProductIndex !== -1) {
          const updatedState = [...state];
          updatedState[existingProductIndex] = {
            ...updatedState[existingProductIndex],
            quantity: updatedState[existingProductIndex].quantity + 1,
          };
          return updatedState;
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
      }

      case "REMOVE_PRODUCT":
        return state.filter((product) => product.id !== action.payload);

      case "CHANGE_QUANTITY":
        return state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: action.payload.quantity };
          } else {
            return product;
          }
        });

      case "CLEAR_CART":
        return [];

      default:
        return state;
    }
  };

  const placeOrder = (shippingData) => {
    const orderId = crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

    const subtotal = state.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = subtotal > 50 ? 0 : 5;

    const order = {
      id: orderId,
      date: new Date().toISOString(),
      items: state,
      shipping: shippingData,
      subtotal,
      shippingCost,
      total: subtotal + shippingCost,
    };

    if (typeof window !== "undefined") {
      try {
        const existing = localStorage.getItem("ecom-express-orders");
        const orders = existing ? JSON.parse(existing) : [];
        orders.push(order);
        localStorage.setItem("ecom-express-orders", JSON.stringify(orders));
      } catch {
        void 0;
      }
    }

    dispatch({ type: "CLEAR_CART" });

    return orderId;
  };
  const getInitialCart = () => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("ecom-express-cart");
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (item) =>
          item &&
          typeof item.id === "number" &&
          typeof item.title === "string" &&
          typeof item.price === "number" &&
          typeof item.quantity === "number" &&
          item.quantity > 0 &&
          item.price >= 0
      );
    } catch {
      return [];
    }
  };

  const [state, dispatch] = useReducer(reducer, [], getInitialCart);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("ecom-express-cart", JSON.stringify(state));
      } catch {
        void 0;
      }
    }
  }, [state]);

  return (
    <ProductContext.Provider value={{ products, setProducts, state, dispatch, placeOrder }}>
      {children}
    </ProductContext.Provider>
  );
};
ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContextProvider;
