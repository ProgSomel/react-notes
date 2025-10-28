import React from "react";
import OrderSummariesSection from "./Summary/OrderSummariesSection";
import OrderReportsSecton from "./Report/OrderReportsSecton";

export default function OrderInfosSection({
  orders,
  onDeliverOrder,
  onDeleteOrder,
}) {
  return (
    <div className="h-[calc(100vh_-_130px)] md:col-span-2">
      <OrderSummariesSection orders={orders} />
      <OrderReportsSecton
        orders={orders}
        onDeliverOrder={onDeliverOrder}
        onDeleteOrder={onDeleteOrder}
      />
    </div>
  );
}
