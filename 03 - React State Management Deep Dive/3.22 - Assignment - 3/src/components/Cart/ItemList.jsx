import React, { useContext } from "react";
import { getImgURL } from "../../utils/produvct-utility";
import { CartContext } from "../../context";
import Button from "../../ui/Button";

export default function ItemList({ item }) {
  const { dispatch } = useContext(CartContext);
  const handleQuantityIncrease = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };
  const handleQuantityDecrease = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  return (
    <>
      <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded shrink-0 flex items-center justify-center">
          <img
            src={getImgURL(item?.image)}
            alt="Gradient Graphic T-shirt"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="grow">
          <div className="flex justify-between">
            <h3 className="font-medium">{item?.name}</h3>
            <span className="text-red-500 text-sm">×</span>
          </div>
          <p className="text-sm text-gray-500">Size: Large</p>
          <p className="text-sm text-gray-500">Color: White</p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">${item?.price * item?.quantity}</p>
            <div className="flex items-center space-x-2">
              <Button
                className="
                w-6 h-6 bg-gray-100 rounded 
                flex items-center justify-center 
                text-black mt-0 disabled:bg-gray-50"
                disabled={item?.quantity <= 1}
                onClick={() => handleQuantityDecrease(item?.id)}
              >
                -
              </Button>
              <span className="text-sm">{item?.quantity}</span>
              <Button
                className="
                w-6 h-6 bg-gray-100 rounded 
                flex items-center justify-center 
                text-black mt-0 disabled:bg-gray-50"
                disabled={item?.quantity >= item?.stock}
                onClick={() => handleQuantityIncrease(item?.id)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
