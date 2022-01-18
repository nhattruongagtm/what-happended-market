import React from "react";

export default function ProductItem({product}) {
  return (
    <div className="product__item">
      <img
        className="product__item__img"
        src={product.img}
        alt={product.img}
      />
      <p className="product__item__name">{product.name} </p>
      <div className="product__item__detail">
        <div className="product__item__detail__price">
          {product.price}<span>won</span>
        </div>
        <div className="product__item__detail__like">
          <i className="fas fa-heart"></i>
          <span>{product.like}</span>
        </div>
      </div>
    </div>
  );
}
