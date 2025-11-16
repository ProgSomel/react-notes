import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import Product from "./Product";

export default function Products({ searchQuery }) {
  const { products, productsDispatch } = useProducts();
  const [shortingStatus, setShortingStatus] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setShortingStatus(value);
    productsDispatch({
      type: "filtering",
      payload: value.toLocaleLowerCase(),
    });
  };

  const filteredProducts =
    searchQuery === ""
      ? products
      : products.filter((product) =>
          product.title
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        );

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            value={shortingStatus}
            onChange={handleFilterChange}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="All Products">All Products</option>
            <option value="Most Popular">Most Popular</option>
            <option value="Newest">Newest</option>
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {filteredProducts?.length === 0 ? (
          <h1>No Product Found</h1>
        ) : (
          filteredProducts?.map((product) => (
            <Product key={product?.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
