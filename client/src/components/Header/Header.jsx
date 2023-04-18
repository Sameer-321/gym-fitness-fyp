import React, { useState } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, token, Profile } from "../../features/auth/authSlice";
import { getMe } from "../../features/auth/authFetch";
import { useNavigate } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLogged = useSelector(isLoggedIn);
  const pp = useSelector(Profile);
  const tokn = useSelector(token);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const getinfo = () => {
    dispatch(getMe(`${tokn}`));
  };

  const closeMenu = (path) => {
    nav(`${path}`);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gray-300/50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 lg:py-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-4">
              <span className="sr-only">Your Company</span>
              <img className="w-auto h-8" src={logo} alt="" />
              <p className="font-bold text-white">Gym Fitness</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => getinfo()}>
              {isLogged && <Dropdown pic={pp} />}
            </button>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {nav__links.map((item) => (
              <button
                key={item.id}
                className="py-5 text-base font-semibold leading-6 cursor-pointer text-gray-50 hover:text-gray-300"
                onClick={() => closeMenu(`${item.path}`)}
              >
                {item.display}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login">
              {!isLogged && (
                <button className="px-4 py-2 text-white bg-indigo-400 rounded-lg register__btn hover:bg-indigo-500">
                  Register
                </button>
              )}
            </a>

            <button onClick={() => getinfo()}>
              {isLogged && <Dropdown pic={pp} />}
            </button>
          </div>
        </nav>
        
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-500/70 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between ">
              <a href="/" className="-m-1.5 p-1.5 flex items-center gap-4">
                <span className="sr-only">Your Company</span>
                <img className="w-auto h-8" src={logo} alt="" />
                <p className="font-bold text-white">Gym Fitness</p>
              </a>
              <div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-100 hover:bg-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="w-6 h-6 text-gray-100"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {nav__links.map((item) => (
                    <button
                      key={item.id}
                      className="block w-full px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                      onClick={() => closeMenu(`${item.path}`)}
                    >
                      {item.display}
                    </button>
                  ))}
                </div>
                <a href="/login">
                  {!isLogged && (
                    <button className="register__btn w-full -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 bg-indigo-100 hover:bg-gray-50">
                      Register
                    </button>
                  )}
                </a>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;