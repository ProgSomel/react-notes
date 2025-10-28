import React, { useState } from "react";
import Products from "../Product/Products";
import Input from "../UI/Input";
import Button from "../UI/Button";

const initialOrder = {
  name: "",
  products: [],
};

export default function CreateOrderSection({ products, onAddOrder }) {
  const [currentOrderId, setCurrentOrderId] = useState(1);
  const [currentOrder, setCurrentOrder] = useState(initialOrder);

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setCurrentOrder({
      ...currentOrder,
      name: e.target.value,
    });
  };

  const handleAddProduct = (product) => {
    setCurrentOrder({
      ...currentOrder,
      products: [...currentOrder.products, product],
    });
  };

  const handleRemoveProduct = (id) => {
    setCurrentOrder({
      ...currentOrder,
      products: currentOrder.products.filter((product) => product.id !== id),
    });
  };

  const handlePlaceOrder = () => {
    if (!currentOrder.name) return alert("Customer Name must not be empty");
    if (currentOrder.products.length === 0) {
      return alert("You must choose at least one food!");
    }
    onAddOrder({
      ...currentOrder,
      name: currentOrder.name.trim(),
      id: currentOrderId,
      orderedAt: Date.now(),
      status: "pending",
    });
    setCurrentOrderId(currentOrderId + 1);
    setCurrentOrder(initialOrder);
  };

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* Customer Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <Input
          type="text"
          placeholder="eg. John Doe"
          value={currentOrder.name}
          onChangeValue={handleChangeName}
          required={true}
        />
      </div>

      {/* Choose Items */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <Products
          products={products}
          currentOrder={currentOrder}
          onAddProduct={handleAddProduct}
          onRemoveProduct={handleRemoveProduct}
        />
      </div>

      {/* Place Order Button */}
      <Button variant="primary" onClick={handlePlaceOrder}>
        Place Order (BDT{" "}
        {currentOrder.products.reduce((acc, curr) => acc + curr.price, 0)})
      </Button>
    </div>
  );
}
