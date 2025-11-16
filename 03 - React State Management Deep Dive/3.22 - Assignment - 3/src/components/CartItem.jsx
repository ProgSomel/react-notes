import React, { useState } from "react";
import { getImgLink } from "../utils/getImgLink";
import { useCart } from "../context/CartContext";

export default function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { cartDispatch } = useCart();
  const { title, price, color, size, image } = product;

  const handlAddQuantity = () => {
    if (quantity < product.stock) {
      const nextQuantity = quantity + 1;
      setQuantity((prev) => prev + 1);
      cartDispatch({
        type: "update-quantity",
        payload: {
          id: product.id,
          quantity: nextQuantity,
          value: "increment",
        },
      });
    }
  };

  const handlRemoveQuantity = () => {
    if (quantity > 1) {
      const nextQuantity = quantity - 1;
      setQuantity((prev) => prev - 1);
      cartDispatch({
        type: "update-quantity",
        payload: {
          id: product.id,
          quantity: nextQuantity,
          value: "decrement",
        },
      });
    }
  };
  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded shrink-0 flex items-center justify-center">
        <img
          src={getImgLink(image)}
          alt={title}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{title}</h3>
          <span
            onClick={() =>
              cartDispatch({
                type: "toggle-to-cart",
                payload: {
                  selectedProduct: product,
                },
              })
            }
            className="text-red-500 text-sm cursor-pointer"
          >
            X
          </span>
        </div>
        <p className="text-sm text-gray-500">Size: {size}</p>
        <p className="text-sm text-gray-500">Color: {color}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${price * quantity}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlRemoveQuantity}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
            >
              -
            </button>
            <span className="text-sm">{quantity}</span>
            <button
              onClick={handlAddQuantity}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
