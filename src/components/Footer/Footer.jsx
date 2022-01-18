import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__boundary">
        <div className="footer__left">
          <p className="footer__title footer__label">what happened</p> <br />
          <p className="footer__content">
            [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
            영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
            이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </div>
        <div className="footer__right">
          <div className="footer__right__item">
            <p className="footer__right__item__title footer__label">about us</p>  <br />
            <p className="footer__content__about">회사 소개 <br/> 인재 채용<br/> 상시 할인 혜택</p>
          </div>
          <div className="footer__right__item">
            <p className="footer__right__item__title footer__label">my order</p>  <br />
            <p className="footer__content__order">
              내 주문 <br/>주문 배송<br/> 취소 / 교환 / 반품 내역 <br/> 상품 리뷰 내역<br/> 증빙 서류
              발급
            </p>
          </div>
          <div className="footer__right__item">
            <p className="footer__right__item__title footer__label">my account</p>  <br />
            <p className="footer__content__account">회원 정보 수정 <br/> 회원 등급<br/> 마일리지 현황 <br/> 쿠폰</p>
          </div>
          <div className="footer__right__item">
            <p className="footer__right__item__title footer__label">help</p>  <br />
            <p className="footer__content__help">
              1 : 1 상담 내역 <br/>상품 Q & A 내역<br/> 공지 사항 <br/>자주하는 질문 고객의
              소리
            </p>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <p className="footer__address">
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
          사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
          이용약관 l 개인정보처리방침
        </p>
        <div className="footer__social">
            <div className="footer__social__item footer__social__item--notion">
                
            </div>
            <div className="footer__social__item footer__social__item--fb">

            </div>
            <div className="footer__social__item footer__social__item--blog">

            </div>
        </div>
      </div>
    </div>
  );
}
