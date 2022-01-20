import React from "react";
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <ul className="header__navigation">
        <li>introduction</li>
        <li>solution</li>
        <li>rate plan</li>
        <div></div>
        <li>login</li>
        <li>apply for free use</li>
      </ul>
      <label htmlFor="menu">
      <i className="fas fa-bars menu "></i>
      </label>
      <input type="checkbox" id="menu" hidden />
      <div className="menu__nav">
          <div className="menu__nav__head">
            <div className="menu__nav__title">
              Menu
            </div>
            <label htmlFor="menu" className="menu__nav__close">
            <i className="fas fa-times"></i>
            </label>
          </div>
          <li>introduction</li>
          <li>solution</li>
          <li>rate plan</li>
          <li>login</li>
          <li>apply for free use</li>
      </div>
      <label className="menu__layer" htmlFor="menu">

      </label>
    </div>
  );
}
