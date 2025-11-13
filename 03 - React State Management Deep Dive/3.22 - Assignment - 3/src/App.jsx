import React, { useReducer, useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./Header";
import Products from "./components/products/Products";
import { productsData } from "./data";
import Cart from "./components/Cart/Cart";
import { CartReducer, initialState } from "./reducer/cartReducer";
import { CartContext } from "./context";

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [cartState, dispatch] = useReducer(CartReducer, initialState);

  return (
    <div className="bg-white font-satoshi">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <CartContext.Provider value={{ cartState, dispatch }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Products products={products} />
            <Cart />
          </div>
        </CartContext.Provider>
      </main>
    </div>
  );
}
