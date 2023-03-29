import React, { useEffect, useState } from "react";
import { getAllUsers } from "../app/fetch/UsersFetch";
import { useDispatch } from "react-redux";

export const RenderList = (props) => {
  const { data } = props;
  const photoUrl = data?.profilePicture?.link;
  console.log(photoUrl);
  return (
    <>
      {/* <div className="flex items-center space-x-4"> */}
      <div className="flex-shrink-0">
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
          {data.name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {data.email}
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
  const [users, setUsers] = useState([]);
  const names = ["a", "b", "c", "D"];

  useEffect(() => {
    async function fetchUsers() {
      const res = await getAllUsers();
      if (res.status === 200) {
        const data = res?.data;
        setUsers(data);
        console.log(data);
        console.log(users);
      }
      return res;
    }
    fetchUsers();
  }, []);

  return (
    <>
    <h1>Users List</h1>
    <br/>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {users.map((i) => {
          return (
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4">
                <RenderList key={users?.id} data={i} />
              </div>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
