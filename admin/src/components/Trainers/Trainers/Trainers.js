import React, { useEffect, useState } from "react";
import { getAllTrainers } from "../../Fetch/TrainerFetch.js";

import { TrainerListCard } from "./TrainerListCard.js";
import { SearchDrop } from "../Search/SearchDrop.js";

export function Trainers() {
  const [users, setUsers] = useState([]);
  const [noUsers, setNoUsers] = useState(false);
  const [showCondition, setShowCondition] = useState("trainer");
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
        console.log(res.data);
      }
      return res;
    }
    fetchUsers();
  }, [showCondition]);

 

  return (
    <>
      <h1>Trainers List:</h1>
      <br />

      <section className="container mx-auto p-6 font-mono">
        <div className="flex">
          <SearchDrop />
         
        </div>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>

                  <th className="px-4 py-3">Status</th>

                  <th className="px-4 py-3">Profile</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {noUsers ? (
                  <div>No {showCondition} Request</div>
                ) : (
                  //For rendering  trainers
                  users.map((i) => <TrainerListCard data={i} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* pagination */}
      <br />
      {/* {<Pagination />} */}
    </>
  );
}
