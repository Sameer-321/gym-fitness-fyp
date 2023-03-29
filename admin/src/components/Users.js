import React from "react";

export const RenderList = (props) => {
   const {name}=props
  return (
    <>
      {/* <div className="flex items-center space-x-4"> */}
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-1.jpg"
          alt="Neil image"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          email@flowbite.com
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $320
      </div>
      {/* </div> */}
    </>
  );
};

export function Users() {
  const names = ["a", "b", "c", "D"]
  return (
    <>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {names.map((i) => {
          return (
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4">
                <RenderList name={i} />
              </div>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
