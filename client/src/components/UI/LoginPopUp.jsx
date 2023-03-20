import React, { useState } from "react";
import "../../styles/LoginPopUp.css";
import { loginfetch } from "../../features/auth/authFetch";
import { useDispatch } from "react-redux";

const LoginPopUp = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginfetch(info));
    setInfo({
      email: "",
      password: "",
    });
    //nav("/");
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((info) => ({
      ...info,
      [name]: value,
    }));
  }
  return (
    <>
      <div className="login-popup">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {/* <a href="/">
            <button>Home</button>
          </a> */}
          <br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPopUp;
