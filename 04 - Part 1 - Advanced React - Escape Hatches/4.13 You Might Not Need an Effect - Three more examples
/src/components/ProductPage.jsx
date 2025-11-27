import React, { useState } from "react";

export default function ProductPage({ product, addToCart }) {
  const [notificationMessage, setNotificationMessage] = useState(null);

  function buyProduct() {
    addToCart();
    showNotification(`Added ${product.title} to the shopping cart`);
  }

  function handleBuyClick() {
    buyProduct();
  }
  function handleCheckoutClick() {
    buyProduct();
    navigateTo("/checkout");
  }

  function showNotification(msg) {
    setNotificationMessage(msg);
  }

  function navigateTo(url) {
    console.log(`Assume that we have navigate to ${url}`);
  }
  return (
    <div>
      <div className="product">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h1>{product.price.toFixed(2)} TK</h1>
        <div>
          <button onClick={handleBuyClick}>Buy now</button>{" "}
          <button onClick={handleCheckoutClick}>Checkout</button>
        </div>
      </div>
      {notificationMessage && (
        <div
          className="notification"
          onClick={() => setNotificationMessage(null)}
        >
          <span>{notificationMessage}</span>
        </div>
      )}
    </div>
  );
}
