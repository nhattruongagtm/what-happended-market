import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const products = [
        {
            id: 1,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/DD5A3AE8-9D3B-4385-9528-CF7C4659BB6B.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 2,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/C5117949-00F6-42A4-BF18-876D8831C3F9.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 3,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/63D95340-C0EE-4737-8F13-5C5ECEB26047.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 4,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/717AE8CC-486D-4EC0-95CB-1EE3CEBC641F.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 5,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/717AE8CC-486D-4EC0-95CB-1EE3CEBC641F.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 6,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/3A36108A-25E9-4A4F-B0EA-1A39273E3622.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 7,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/287C20D3-1EF8-4A67-942C-95D1B1C5CCFA.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 8,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/E7062892-112D-4460-8B56-0B27F291ED0C.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 9,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/769DA2AB-2BCB-4FFE-8929-95E259A21262.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 10,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/A2127BBD-076B-45A0-B64B-6B0566F168CC.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 11,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/F8BA4E68-74F9-43F0-92C6-99A4EA8A3428.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 12,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/41284102-D98F-4C7A-8C54-8603527E5708.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 13,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/81B81F29-B13C-49E8-8351-363966545AD8.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 14,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/758C37C8-A120-467D-95C2-FD5D96386096.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 15,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/8D0BC674-57B4-4F76-A265-34900D5E5C33.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 16,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/0E86D52F-6156-474F-824E-58DA99BF9A81.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 17,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/4F92C971-F450-4918-98BE-5371AF5E4F68.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 18,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/569E5323-6CE9-41B4-822A-9747FAAD4A47.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 19,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/2E9999BE-3F08-4991-AADC-C7562E0D9567.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 20,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/DC072ACA-65AA-4035-94D3-53516159B2A8.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 21,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/2B1683B6-2D63-4130-92E3-2D3936B720BC.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 22,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/067FFD8C-365C-47A9-A099-A77E8439851C.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 23,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/B71C796F-C303-40D1-A2FA-ACD11ED648A2.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 24,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/51B0908F-7B3F-4E46-AE11-406EB4888D7C.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
        {
            id: 25,
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/91AA197A-FAEF-470D-A004-6E8984F2117F.png',
            name: '[what happen] How to create',
            price: 2500,
            like: 236
        },
    ]
  return (
    <>
      <div className="product__list fluid">
        {products.map((product)=>(
            <ProductItem product={product} key={product.id}/>
        ))}
        
      </div>
      <div className="product__see__more">
        <button className="see__more"><span>see more</span></button>
      </div>
    </>
  );
}
