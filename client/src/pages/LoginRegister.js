import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";

import { useState, useEffect } from "react";
function LoginRegister() {
  const [login, setLogin] = useState(true);

  const handleState = (change) => {
    setLogin(change);
  };

  const highLight =
    "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white";
  const lowLight =
    "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300";

  return (
    <section className="bg-gray-900 pt-28">
      <div className="container flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <form className="w-full max-w-md">
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => {
                  setLogin(true);
                }}
                className={login ? highLight : lowLight}
              >
                <div className="m-1"></div>
                sign in
              </button>

              <button
                onClick={() => {
                  setLogin(false);
                }}
                className={!login ? highLight : lowLight}
              >
                sign up
              </button>
            </div>

            <div className="mt-4 signInDiv">
              <div className="flex items-center justify-between">
                {login && <Login status={handleState} />}
                {!login && <Register status={handleState} />}
                {/* <div className="signInDiv"></div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginRegister;
