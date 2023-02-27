import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";
function LoginRegister() {
  const [login, setLogin] = useState(true);
  const handleState= (change)=>{
    setLogin(change)
   
  }
  const highLight =
    "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white";
  const lowLight =
    "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300";
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <form className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <a
                onClick={() => {
                  setLogin(true);
                }}
                href="#"
                className={login?highLight:lowLight}
              >
                sign in
              </a>

              <a
                onClick={() => {
                  setLogin(false);
                }}
                href="#"
                className={!login?highLight:lowLight}
              >
                sign up
              </a>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                {login && <Login status={handleState}/>}
                {!login && <Register status={handleState} />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginRegister;
