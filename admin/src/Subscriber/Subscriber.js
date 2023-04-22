import React, { useEffect, useState } from "react";
import { getAllSubscriber } from "../components/Fetch/SubscriberFetch.js";
import { SubscriberListCard } from "./SubscriberListCard.js";
import { SearchDrop } from "../components/Trainers/Search/SearchDrop.js";

export function Subscriber() {
  const [users, setUsers] = useState([]);
  const [noUsers, setNoUsers] = useState(false);

  useEffect(() => {
    async function fetchAllSubscriber() {
      const res = await getAllSubscriber();

      if (res.status === 200) {
        const data = await res.data;
        setUsers(data);

        if (data.length === 0) {
          setNoUsers(true);
        } else if (data.length > 0) {
          setNoUsers(false);
        }
      }
    }
    fetchAllSubscriber();
  }, []);

  return (
    <>
      <h1>Subscriber List:</h1>
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

                  <th className="px-4 py-3">Rough</th>
                  <th className="px-4 py-3">Profile</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {noUsers ? (
                  <div>No subscriber</div>
                ) : (
                  //For listing
                  users.map((i) => <SubscriberListCard data={i} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <br />
    </>
  );
}
