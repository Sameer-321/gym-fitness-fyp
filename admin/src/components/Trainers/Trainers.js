import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTrainers } from "./TrainerFetch.js";
// import Profile from "./Profile";

export const RenderList = (props) => {
  const { data } = props;
  
  const photoUrl = data?.profilePicture?.link;
  return (
    <>
      {/* <div className="flex items-center space-x-4"> */}
      <div className="flex-shrink-0 ">
        <img
          className="w-8 h-8 rounded-full"
          src={
            photoUrl
              ? `http://localhost:5000/${photoUrl}`
              : "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
          }
          alt="img"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {data.userInfo.name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {data.userInfo.email}
        </p>
      </div>
      {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $320
      </div> */}

      {/* </div> */}
    </>
  );
};

export const pagination = () => {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export function Trainers() {
  const [users, setUsers] = useState([]);
  const [noUsers, setNoUsers] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const res = await getAllTrainers()
      if (res.status === 200) {
        const data = res?.data;
        setUsers(data);
        if (data.length === 0) {
          setNoUsers(true);
        }
        console.log(data.length);
        console.log(users);
      }
      return res;
    }
    fetchUsers();
  }, []);

  const individualProfile = (id) => {
    console.log(id);
    const getItem = users.find((item) => item._id === id);
    // console.log(getItem);
    nav(`CV/${id}`, { state: { info: getItem } });
  };

  return (
    <>
      <h1>Trainers List:</h1>
      <br />
      {noUsers ? (
        <div>No Trainers registered until now</div>
      ) : (
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((i) => {
            return (
              <li
                className="pb-3 sm:pb-4"
                key={i?._id}
                onClick={() => {
                  individualProfile(i._id);
                }}
              >
                <div className="flex items-center space-x-4 cursor-pointer">
                  <RenderList data={i} />
                </div>{" "}
              </li>
            );
          })}
        </ul>
      )}

      {/* pagination */}
      <br />
      {pagination()}
    </>
  );
}