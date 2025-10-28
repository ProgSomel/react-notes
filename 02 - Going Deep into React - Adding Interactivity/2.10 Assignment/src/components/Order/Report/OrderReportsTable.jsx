import React from "react";
import OrderReportsTableRow from "./OrderReportsTableRow";
import OrderReportsTableColumn from "./OrderReportsTableColumn";
import Button from "../../UI/Button";

export default function OrderReportsTable({
  filteredOrders,
  onDeliverOrder,
  onDeleteOrder,
}) {
  const tableHeader = [
    ["ID", "Customer Name", "Items", "Amount", "Status", "Acton"],
  ].map((row) => (
    <OrderReportsTableRow isHead={true} key={row.join("")}>
      {row.map((column) => (
        <OrderReportsTableColumn isHead={true} key={column}>
          {column}
        </OrderReportsTableColumn>
      ))}
    </OrderReportsTableRow>
  ));

  const tableRow = filteredOrders
    .toSorted((a, b) => b.orderedAt - a.orderedAt)
    .map((order) => [
      order.id,
      order.name,
      order.products.length,
      order.products.reduce((acc, product) => product.price + acc, 0),
      <span
        className={`${order.status === "pending" ? "text-red-500" : ""} ${
          order.status === "delivered" ? "text-green-500" : ""
        }`}
      ></span>,
      <>
        <Button
          variant="danger--small"
          className="mr-1"
          onClick={() => onDeleteOrder(order.id)}
        >
          Delete
        </Button>
        {order.status === "pending" && (
          <Button
            variant="success--small"
            onClick={() => onDeliverOrder(order.id)}
          >
            DELIVER
          </Button>
        )}
      </>,
    ]);

  const tableBody =
    tableRow.length === 0 ? (
      <OrderReportsTableRow>
        <OrderReportsTableColumn className="text-center font-bold" colSpan={6}>
          No orders found
        </OrderReportsTableColumn>
      </OrderReportsTableRow>
    ) : (
      tableRow.map((row) => (
        <OrderReportsTableRow key={row[0]}>
          {row.map((column, index) => (
            <OrderReportsTableColumn key={index}>
              {column}
            </OrderReportsTableColumn>
          ))}
        </OrderReportsTableRow>
      ))
    );
  return (
    <div className="bg-cardbg rounded-lg p-4">
      <div className="reports-container">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-[5%]" />
            <col className="w-[25%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[20%]" />
            <col className="w-[30%]" />
          </colgroup>
          <thead>{tableHeader}</thead>
          <tbody className="text-sm">{tableBody}</tbody>
        </table>
      </div>
    </div>
  );
}
