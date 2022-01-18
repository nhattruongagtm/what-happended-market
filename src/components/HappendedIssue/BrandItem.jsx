import React from "react";

export default function BrandItem({ brand }) {
  return (
    <div className="issues__brands__item">
      <div className="issues__brands__item__header">{brand.name}</div>

      <div className="issues__brands__item__main">
        <img src={brand.img} alt="" />
      </div>
    </div>
  );
}
