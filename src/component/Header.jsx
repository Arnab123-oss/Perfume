import React, { useEffect, useState } from "react";
import "./Props.css";

import logo from "../assets/logo.png";
import { RiShieldUserLine, RiMenuSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiPerfumeBottle } from "react-icons/gi";
import { Link } from "react-router-dom";

const Props = () => {
  return (
    <>
      <nav className="section__container nav__container">
        <a href="/" className="nav__logo">
          <img height={"100px"} src={logo}></img>
        </a>
        <ul className="nav__links">
          <li className="link">
            <Link to={"/home"}>HOME</Link>
          </li>
          <li className="link">
            <a href="/products">SHOP</a>
          </li>
          <li className="link">
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
        <div className="nav__icons">
          <span>
            <Link to={"/home"}>
              <RiShieldUserLine />
            </Link>
          </span>
          <span>
            <Link to={"/home"}>
              <RiMenuSearchLine />
            </Link>
          </span>
          <span>
            <Link to={"/home"}>
              <HiOutlineShoppingBag />
            </Link>
          </span>
          <span>
            <Link to={"/home"}>
              <GiPerfumeBottle />
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Props;
