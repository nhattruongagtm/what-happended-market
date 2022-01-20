import React from "react";
import BrandItem from "./BrandItem";

export default function HappendedIssue() {
    const brands = [
        {
            id: 1,
            name: 'B brand',
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/440C3E2B-28AB-4047-8880-C0A54D79AE96.png',
        },
        {
            id: 2,
            name: 'C brand',
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/6FD14C5C-BB25-4BD0-AE68-61919E51E95D.png',
        },
        {
            id: 3,
            name: 'D brand',
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/91CBB349-20B7-46E7-B635-EFECDFF4A374.png',
        },
        {
            id: 4,
            name: 'E brand',
            img: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/440C3E2B-28AB-4047-8880-C0A54D79AE96.png',
        },
    ]
  return (
      <div className="issues__boundary">
    <div className="issues">
      <div className="issues__title title">
        <div className="issues__title__label title__label">
          Happened’s issue
        </div>
        <div className="issues__title__content title__content">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </div>
        <div className="issues__more">
          <button className="see__more">see more</button>
        </div>
      </div>
      <div className="issues__brands">
        <div className="issues__brands__forward">
          <p>whpn issue</p>
          <div className="issues__brands__forward__btn"></div>
        </div>
        {brands.map((brand)=>(
            <BrandItem brand={brand} key={brand.id}/>
        ))}
        
      </div>
      <div className="issues__dice--3 issues__dice"></div>
      <div className="issues__dice--5 issues__dice"></div>
      <div className="issues__object__1 issues__dice"></div>
      <div className="issues__object__2 issues__dice"></div>
      <div className="issues__object__3 issues__dice"></div>
      
    </div>
      <div className="issues__object__4 issues__dice"></div>
    </div>
  );
}
