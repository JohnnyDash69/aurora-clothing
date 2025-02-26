import React from "react";

const Product = ({ name, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ${price}</p>
    </div>
  );
};

export default Product;
