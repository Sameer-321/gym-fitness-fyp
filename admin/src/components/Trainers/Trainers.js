import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTrainers } from "./TrainerFetch.js";
import { Pagination } from "../pagination/Pagination.js";
import { TrainerListCard } from "./TrainerListCard.js";
import { SearchDrop } from "../Search/SearchDrop.js";
export function Trainers() {
  const [users, setUsers] = useState([]);
  const [noUsers, setNoUsers] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const res = await getAllTrainers();
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

  return (
    <>
      <h1>Trainers List:</h1>
      <br />
      {noUsers ? (
        <div>No Trainers Request until now</div>
      ) : (
        <section className="container mx-auto p-6 font-mono">
          <SearchDrop />
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
                  {users.map((i) => (
                    <TrainerListCard data={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* pagination */}
      <br />
      {<Pagination />}

     
      
    </>
  );
}
