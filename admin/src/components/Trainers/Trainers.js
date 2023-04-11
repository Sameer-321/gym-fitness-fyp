import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTrainers } from "./TrainerFetch.js";
import { Pagination } from "../pagination/Pagination.js";
import { TrainerReqListCard } from "./TrainerReqListCard.js";
import { SearchDrop, DropDown } from "./Search/SearchDrop.js";
import { createContext } from "react";
import { ActualTrainers } from "./Actual Trainer/ActualTrainers.js";
export function Trainers() {
  const [users, setUsers] = useState([]);
  const [noUsers, setNoUsers] = useState(false);
  const [showCondition, setShowCondition] = useState("all");
  useEffect(() => {
    async function fetchUsers() {
      const res = await getAllTrainers(showCondition);
      if (res.status === 200) {
        const data = await res?.data;
        setUsers(data);
        if (data.length === 0) {
          setNoUsers(true);
        } else if (data.length > 0) {
          setNoUsers(false);
        }
        console.log(data.length);
        console.log(users);
        console.log(noUsers);
        console.log(showCondition);
      }
      return res;
    }
    fetchUsers();
  }, [showCondition]);

  const renderListCondition = (props) => {
    //accepted,rejected,pending,trainers and all-------->trainer req
    setShowCondition(props);
  };

  return (
    <>
      <h1>Trainers List:</h1>
      <br />

      <section className="container mx-auto p-6 font-mono">
        <div className="flex">
          {/* <sortList.Provider value={renderListCondition}> */}
          <DropDown changeStatus={renderListCondition} />
          {/* </sortList.Provider>{" "} */}
          <SearchDrop />{" "}
        </div>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr></tr>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>

                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">C.V</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {noUsers ? (
                  <div>No {showCondition} Request</div>
                ) : showCondition !== "trainer" ? ( //For rendering REquest trainers
                  users.map((i) => <TrainerReqListCard data={i} />)
                ) : (
                  // console.log("a")
                  users.map((i) => <ActualTrainers data={i} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* pagination */}
      <br />
      {<Pagination />}
    </>
  );
}
