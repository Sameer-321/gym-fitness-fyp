import React, { useRef, useState } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, token, Profile } from "../../features/auth/authSlice";
import { getMe } from "../../features/trainer/authFetchaaaa";
import { useNavigate } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";
const nav__links = [
  {
    id: 1,
    path: "/",
    display: "Home",
  },
  {
    id: 2,
    path: "/trainers",
    display: "Trainers",
  },
  {
    id: 3,
    path: "/subs",
    display: "Subscription",
  },

  {
    id: 4,
    path: "/about",
    display: "About Us",
  },
];

const Header = () => {
  const isLogged = useSelector(isLoggedIn);
  const pp = useSelector(Profile);
  const tokn = useSelector(token);
  const dispatch = useDispatch();
  const headerRef = useRef(null);
  const nav = useNavigate();
  const getinfo = () => {
    dispatch(getMe(`${tokn}`));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          {/* ======= LOGO ========= */}
          <a href="/">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="dumbell logo" />
              </div>
              <p>Gym Fitness</p>
            </div>
          </a>

          {/* ========== navigation menu ========== */}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item" key={item.id}>
                  <a
                  className="text-base font-normal"
                    onClick={() => {
                      nav(`${item.path}`);
                    }}
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========== nav right ============ */}
          <div className="nav__right">
            <a href="/login">
              {!isLogged && <button className="register__btn">Register</button>}
            </a>

            <div onClick={()=>getinfo()}>{isLogged && <Dropdown pic={pp} />}</div>

            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
