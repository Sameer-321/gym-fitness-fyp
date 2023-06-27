import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginfetch } from "../../features/auth/authFetch";
import jwt_decode from "jwt-decode";

export default function Login() {
  const userRef = useRef();
  const dispatch = useDispatch();

  const nav = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  // function handleCallBackReponse(response) {
  //   console.log("encoded JWT ID token: " + response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  // }
  // useEffect(() => {
  //   window.onload = () => {
  //     /* global google */
  //     google.accounts.id.initialize({
  //       client_id:
  //         "543376537633-0s81anq2u58hmjlda2cf5mlfascscdpe.apps.googleusercontent.com",
  //       callback: handleCallBackReponse,
  //     });
  //     google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //       theme: "outline",
  //       size: "large",
  //       backgroundColor: "purple",
  //     });
  //   };
  // }, []);

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
      <div className="flex min-h-full flex-1 mt-[5%]">
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col w-[55%] justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://media.istockphoto.com/id/876895654/photo/white-silhouette-strenge-man-on-the-black-background.jpg?s=612x612&w=is&k=20&c=KMRMzDWEpXwATu5pjuXVnooH85z6Mxy7q7VSaWPsu8w="
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member?{" "}
                <div
                  onClick={() => nav("/register")}
                  className="hover:cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Create one
                </div>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form
                  action="#"
                  method="POST"
                  className=" max-w-[80%] space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        ref={userRef}
                        name="email"
                        type="email"
                        value={info.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}