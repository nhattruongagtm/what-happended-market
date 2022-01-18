import React from "react";
import BestProductItem from "./BestProductItem";

export default function BestProducts() {
  const bestProducts = [
    {
      id: 1,
      image:
        "https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/8B8780DD-667D-4AF8-99A7-EE4DD9D721B8.png",
      content: "How to create mobile-optimized",
    },
    {
      id: 2,
      image:
        "https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/0DDED704-0F29-4235-8F7E-A8FD3A65A6E4.png",
      content: "How to create mobile-optimized",
    },
    {
      id: 3,
      image:
        "https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/392FF024-EA35-4734-B226-9F4D4AC05DE2.png",
      content: "How to create mobile-optimized",
    },
  ];
  return (
    <div className="best__products">
      <p className="best__products__title">best product</p>
      <p className="best__products__content">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first{" "}
      </p>
      <div className="best__products__list">
        {bestProducts.map((product,index) => (
          <BestProductItem product={product} key={product.id} rank={index+1} />
        ))}
      </div>
    </div>
  );
}
