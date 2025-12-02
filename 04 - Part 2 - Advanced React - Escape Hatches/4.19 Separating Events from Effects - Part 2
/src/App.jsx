import React from "react";
import Page from "./components/Page";
import ShoppingCartContect from "./contexts/shoppingCartContext";

const items = [
  {
    id: 1,
    title: "Product 1",
  },
];

export default function App() {
  return (
    <div>
      <ShoppingCartContect.Provider value={items}>
        <Page url="/home" />
      </ShoppingCartContect.Provider>
    </div>
  );
}
