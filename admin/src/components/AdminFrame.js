import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function AdminFrame() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="subscriber"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C8.14 2 5 5.14 5 9c0 1.93.74 3.68 1.95 5.02C7.6 16.04 9.7 17 12 17s4.4-.96 5.05-2.98C18.26 12.68 19 10.93 19 9c0-3.86-3.14-7-7-7zm0 12.5c-2.33 0-4.45-.88-6-2.36C6.55 11.16 8.67 10 12 10s5.45 1.16 6 2.14c-1.55 1.48-3.67 2.36-6 2.36zm0-10c1.93 0 3.5 1.57 3.5 3.5S13.93 9.5 12 9.5 8.5 7.93 8.5 6 10.07 2.5 12 2.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Subscriber
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="trainers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 12h-2.63l1.57-4.71a1 1 0 00-.16-1.09 1 1 0 00-1.45.04L10 9.12l-3.34-2.88a1 1 0 00-1.41-.06 1 1 0 00-.06 1.41L6 12H4a1 1 0 00-1 1v2a1 1 0 001 1h1v2H4a2 2 0 01-2-2v-2a2 2 0 012-2h1V9a3 3 0 013-3h6a3 3 0 013 3v1h1a2 2 0 012 2v2a2 2 0 01-2 2h-1v2h1a1 1 0 001-1v-2a1 1 0 00-1-1h-2zm-6 6H7v-2h3v2zm6 0h-3v-2h3v2zM5 14v2H3v-2h2zm0-4V8h2v2H5zm6 0V8h2v2h-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Trainers</span>
              </Link>
            </li>
            <li>
              <Link
                to="trainers-req"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 17a6.99 6.99 0 01-5.278-2.43A7.047 7.047 0 015 12c0-1.897.736-3.646 2.045-4.955A6.99 6.99 0 0112 5a6.99 6.99 0 014.955 2.045A6.99 6.99 0 0119 12c0 1.897-.736 3.646-2.045 4.955A6.99 6.99 0 0112 19zm0-14C6.477 5 2 9.477 2 12s4.477 7 10 7 10-4.477 10-7-4.477-7-10-7zm0 12a5 5 0 100-10 5 5 0 000 10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Trainers Request
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
}
