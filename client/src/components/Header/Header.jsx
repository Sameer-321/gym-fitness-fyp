import React, { useRef,useState } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn,token } from "../../features/auth/authSlice";
import { getMe } from "../../features/auth/authFetch";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing-plan",
    display: "Pricing",
  },
];



const Header = () => {
  const isLogged = useSelector(isLoggedIn);
  //console.log(isLogged)
  const tokn = useSelector(token);
  const dispatch = useDispatch()
  const headerRef = useRef(null);

// useEffect(()=>{
//   const jwt = token(authState);
//   setJwtToken(jwt)

// },[tokn])

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const getinfo = ()=>{
    //console.log("token",tokn)
 dispatch(getMe(`${tokn}`))
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ======= LOGO ========= */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>Gym Fitness</h2>
          </div>

          {/* ========== navigation menu ========== */}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <a onClick={handleClick} href={item.path}>
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
            </a><div onClick={getinfo}> {isLogged && <button className="register__btn">Profile</button>}</div>

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
