import React from "react";

export default function BestProductItem({product,rank}) {
  return (
    <div className="best__product__item">
      <div className={rank === 1 ? "best__product__item__rank--1 rank": rank === 2 ? "best__product__item__rank--2 rank":"best__product__item__rank--3 rank"}>

      </div>
      <div className="best__product__item__img">
        <img
          src={product.image}
          alt=""
        />
      </div>
      <div className="best__product__item__label">
        <p className="best__product__item__label__title">
          {product.content}
        </p>
        <div className="best__product__item__label__btn"></div>
      </div>
    </div>
  );
}
