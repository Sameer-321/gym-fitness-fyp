import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginfetch } from "../features/auth/authFetch";
import jwt_decode from "jwt-decode";

export default function Login(props) {
  const userRef = useRef();
  const dispatch = useDispatch();
  // const select = useSelector((state) => state.auth); //{ loading, userInfo, error }

  const [errMsg, setErrMsg] = useState("");
  const nav = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  function handleCallBackReponse(response) {
    console.log("encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    window.onload = () => {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          "543376537633-0s81anq2u58hmjlda2cf5mlfascscdpe.apps.googleusercontent.com",
        callback: handleCallBackReponse,
      });
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
        backgroundColor: "purple",
      });
    };
  }, []);
  function handleClick() {
    props.status(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginfetch(info));

    setInfo({
      email: "",
      password: "",
    });

    nav("/");
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
      <section className="bg-white">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <form className="w-full max-w-md">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={userRef}
                  value={info.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-800 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Forget Password?
                  </a>
                </div>

                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
              <button
                type="button"
                className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform  rounded-lg hover:bg-blue-300 focus:outline-none"
              >
                <span id="signInDiv"></span>
              </button>
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-500">
              {" "}
              Don't have an account?{" "}
              <a
                href="#"
                onClick={handleClick}
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
              >
                Create One
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
