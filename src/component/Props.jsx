import React, { useEffect, useState } from "react";
import "./Props.css";

import logo from "../assets/logo.png"
import PrimaryRoute from "../Routes";
import { Link } from "react-router-dom";

const Props = () => {

  return (
    <>
      <nav className="section__container nav__container">
        <a href="/" className="nav__logo">
          <img height={'100px'} src={logo}></img>
        </a>
        <ul className="nav__links">
          <li className="link">
            <Link  to={'/home'}>HOME</Link>
          </li>
          <li className="link">
            <a href="#">SHOP</a>
          </li>
          {/* <li class="link"><a href="#">PAGES</a></li> */}
          {/* <li class="link"><a href="#">BLOG</a></li> */}
          <li className="link">
            <a href="#">LOOKBOOK</a>
          </li>
        </ul>
        <div className="nav__icons">
          <span>
            <i className="ri-shield-user-line" />
          </span>
          <span>
            <i className="ri-search-line" />
          </span>
          <span>
            <i className="ri-shopping-bag-2-line" />
          </span>
        </div>
      </nav>
      <PrimaryRoute/>
  <hr />
    </>
  );
};

export default Props;
