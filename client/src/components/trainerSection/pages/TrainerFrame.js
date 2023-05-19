import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { firstName, lastName } from "../../../features/trainer/trainerSlice";

const navigation = [
  { name: "proflile", link: "/", icon: HomeIcon, current: 1 },
  {
    name: "Chat",
    link: "/messenger",
    icon: ChatBubbleLeftIcon,
    current: 2,
  },
];
const userNavigation = [{ name: "Your profile" }, { name: "Sign out" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function TrainerFrame(userInfo) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const first_name = useSelector(firstName);
  const last_name = useSelector(lastName);

  const [current, SetCurrent] = useState(1);
  const [name, setName] = useState({
    f_name: "",
    l_name: "",
  });

  useEffect(() => {
    setName((prevState) => ({ ...prevState, f_name: first_name }));
    setName((prevState) => ({ ...prevState, l_name: last_name }));
  }, [first_name]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img className="h-8 w-auto" src="" alt="Gym logo" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="-mx-2 flex-1 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              onClick={() => SetCurrent(item.current)}
                              to={`${item.link}`}
                              className={classNames(
                                item.current === current
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-[19%] lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
          <div className="flex h-16 shrink-0 items-center justify-center">
            <img
              className="h-8 w-auto"
              src={
                "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
              }
              alt="Your Company"
            />
          </div>
          <nav className="mt-8">
            <ul role="list" className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={`${item.link}`}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lg:pl-20">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div
                className="relative flex flex-1"
                action="#"
                method="GET"
              ></div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={
                        userInfo?.userInfo?.profilePictureLink
                          ? `http://localhost:5000/${userInfo.userInfo?.profilePictureLink}`
                          : "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                      }
                      alt="pp"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        {`${name.f_name} ${name.l_name} `}
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                              onClick={() => {
                                item.name === "Your profile"
                                  ? nav("/")
                                  : dispatch(logout());
                              }}
                            >
                              {item.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {/* Main area */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
