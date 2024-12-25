import { createContext } from "react";
import { useState, useReducer } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_PRODUCT":
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

       
      default:
        return state;
    }
  }
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ products, setProducts, state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
