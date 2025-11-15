import { createContext, useContext, useReducer } from "react";
import { ProductsReducer } from "../reducers/productsReducer";
import { initialProducts } from "../data/initalProducts";

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductsReducer, initialProducts);
  return (
    <ProductContext.Provider value={{ products, productsDispatch: dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};

export default ProductsProvider;
