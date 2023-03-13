import React, { useRef, useState } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, token } from "../../features/auth/authSlice";
import { getMe } from "../../features/auth/authFetch";

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
  const tokn = useSelector(token);
  const dispatch = useDispatch();
  const headerRef = useRef(null);

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
              <h2>Gym Fitness</h2>
            </div>
          </a>

          {/* ========== navigation menu ========== */}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item" key={item.id}>
                  <a href={`${item.path}`}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========== nav right ============ */}
          <div className="nav__right">
            <a href="/login">
              {!isLogged && <button className="register__btn">Register</button>}
            </a>
            <a href="/profile">
             <div onClick={getinfo}>
              {" "}
              {isLogged && <button className="register__btn">Profile</button>}
            </div> 
            </a>
            

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
