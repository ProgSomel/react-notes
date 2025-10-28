import { useState } from "react";
import Navbar from "./components/Navbar";
import CreateOrderSection from "./components/Order/createOrderSection";
import Products from "./data/product.json";
import OrderInfosSection from "./components/Order/OrderInfosSection";

function App() {
  const [orders, setOrders] = useState([]);
  const handleAddOrder = (order) => {
    setOrders([...orders, order]);
  };

  const handleDeliverOrder = (id) => {
    // setOrders((prevOrders) =>
    //   prevOrders.map((order) =>
    //     order.id === id ? { ...order, status: "delivered" } : { ...order }
    //   )
    // );
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "delivered" } : order
      )
    );
  };

  const handleDeleteOrder = (id) => {
    console.log("delete click");
    // setOrders((prevOrders) => prevOrders.filter((order) => order.id != id));
    setOrders(orders.filter((order) => order.id != id));
  };

  return (
    <div class="container mx-auto px-4 h-screen flex flex-col">
      <Navbar />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrderSection products={Products} onAddOrder={handleAddOrder} />
        <OrderInfosSection
          orders={orders}
          onDeliverOrder={handleDeliverOrder}
          onDeleteOrder={handleDeleteOrder}
        />
      </div>
    </div>
  );
}

export default App;
