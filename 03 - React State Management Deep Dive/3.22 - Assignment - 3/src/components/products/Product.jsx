import React, { useContext, useState } from "react";
import { getImgURL } from "../../utils/produvct-utility";
import Rating from "./Rating";
import Button from "../../ui/Button";
import { CartContext } from "../../context";

export default function Product({ product }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { cartState, dispatch } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_To_CART",
      payload: product,
    });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  console.log(cartState?.cartData);

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImgURL(`${product.image}`)}
          alt={product?.name}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product?.name} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <Rating value={product?.rating} />
            <span className="text-xs text-gray-500 ml-1">
              {product?.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">
            ({product?.stock} pcs left)
          </span>
        </div>
        <p className="font-bold">${product?.price} </p>
        {isAddedToCart ? (
          <Button
            onClick={() => {
              handleRemoveFromCart(product?.id);
              setIsAddedToCart(false);
            }}
          >
            Remove From the Cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleAddToCart(product);
              setIsAddedToCart(true);
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}
