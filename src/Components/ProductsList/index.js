import React from "react";
import ProductCard from "../ProductCard";
import "./index.scss";
import productsList from '../../Services'
export default function ProductsList() {
  return (
    <div className="product-list my-5">
      <h5>Similar Products</h5>
      <h6 className="fw-light">You may like these products also</h6>
      <div className="row ">
        {productsList.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
