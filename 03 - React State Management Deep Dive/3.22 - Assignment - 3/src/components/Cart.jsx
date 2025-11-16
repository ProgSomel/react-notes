import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useCart();
  return (
    <div>
      <h2>YOUR CART</h2>
      {cart?.map((product) => (
        <CartItem product={product} />
      ))}
    </div>
  );
}
