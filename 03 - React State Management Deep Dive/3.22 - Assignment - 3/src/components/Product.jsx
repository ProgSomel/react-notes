import React from "react";
import { getImgLink } from "../utils/getImgLink";
import CartButton from "./CartButton";
import { useCart } from "../context/CartContext";

export default function Product({ product }) {
  const { cart, cartDispatch } = useCart();
  const { title, price, rating, stock, image } = product;
  const ratingGenerator = () => {
    const MAX_STARS = 5;

    const stars = Array.from({ length: MAX_STARS }, (_, i) => {
      const isFilled = i < rating;
      return (
        <span key={i}>
          {isFilled ? <span>★</span> : <span className="text-gray-300">★</span>}
        </span>
      );
    });
    return stars;
  };

  const handleToggleToCart = (selectedProduct) => {
    cartDispatch({
      type: "toggle-to-cart",
      payload: { selectedProduct },
    });
  };

  const productQuantity = cart?.find(
    (cartProduct) => cartProduct.id === product.id
  );

  const isAlreadyExist = cart?.some((item) => item.id === product.id);

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImgLink(image)}
          alt="product image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-500">{ratingGenerator()}</div>
            <span className="text-xs text-gray-500 ml-1">{rating / 5}</span>
          </div>
          <span className="text-xs text-gray-700">
            (
            {stock === 0
              ? "Out of Stock"
              : productQuantity?.quantity
              ? stock - productQuantity?.quantity
              : stock}
            {stock !== 0 ? "pcs left" : null})
          </span>
        </div>
        <p className="font-bold">{price}$</p>
        <CartButton
          disabled={stock === 0}
          onSmash={() => handleToggleToCart(product)}
          type={isAlreadyExist ? "remove" : "add"}
        />
      </div>
    </div>
  );
}
