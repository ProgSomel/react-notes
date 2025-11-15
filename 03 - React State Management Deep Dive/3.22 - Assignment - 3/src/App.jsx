import React from "react";
import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
import HomePage from "./components/pages/HomePage";

export default function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <HomePage />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}
