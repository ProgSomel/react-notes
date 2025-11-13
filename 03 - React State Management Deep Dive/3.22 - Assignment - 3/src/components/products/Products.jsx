import React from "react";
import ProductsFilterSection from "./ProductsFilterSection";
import Product from "./Product";
import Cart from "../Cart/Cart";

export default function Products({ products }) {
  return (
    <>
      <div className="lg:col-span-2">
        <ProductsFilterSection />
        <div className="product-grid">
          {products?.map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}
