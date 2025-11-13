import React, { useContext } from "react";
import ItemList from "./ItemList";
import Summary from "./Summary";
import { CartContext } from "../../context";

export default function Cart() {
  const { cartState } = useContext(CartContext);
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartState.cartData?.map((item) => (
          <ItemList key={item?.id} item={item} />
        ))}

        <Summary />
      </div>
    </div>
  );
}
