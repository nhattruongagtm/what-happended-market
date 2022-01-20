import React from "react";
import { useEffect } from "react";
export default function BrandStory() {
  useEffect(()=>{
    const brandItem1 = document.querySelector("#book__1");
    const brandStory = document.querySelector("#brand__story");
    const brandItem2 = document.querySelector("#book__2");
    const brandItem3 = document.querySelector("#book__3");
    const brandItem4 = document.querySelector("#book__4");
    const brandItem5 = document.querySelector("#book__5");

    document.addEventListener('scroll',()=>{
      const pos = window.scrollY;
      if(pos > 5150){
          brandStory.classList.add('b__story__display');
      }
    })
  },[])
  return (
    <div className="brand__story">
      <div className="story__title title">
        <p className="story__title__label title__label">Brand Story</p>
        <p className="story__title__content title__content">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
      </div>
      <div className="story__book">
        {/* <div className="story__page"></div>
        <div className="story__cover">
          <div className="story__book__left"></div> */}
          <div className="story__book__right ">
            <div className="book__right__title">What Happened’s Brand story</div>
            <div className="book__right__content ">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </div>
            <div className="book__right__more">
                    <button className="see__more">
                        See more
                    </button>
            </div>
          {/* </div> */}
        </div>
        
      </div>
        <div className="story__note story__absolute" id="brand__story">
          
        </div>
        <div className="story__book__1 story__absolute" id="book__1">

        </div>
        <div className="story__book__2 story__absolute" id="book__2">

        </div>
        <div className="story__time story__absolute" id="book__3">

        </div>
        <div className="story__plant story__absolute" id="book__4">

        </div>
        <div className="story__book__3 story__absolute" id="book__5">

        </div>
        <div className="story__book__4 story__absolute" id="book__6">

        </div>
    </div>
  );
}
