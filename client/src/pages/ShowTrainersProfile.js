import React from "react";
import { UserIcon, StarIcon } from "@heroicons/react/24/solid";

export const ShowTrainersProfile = () => {
  return (
    <section className="container px-6 my-40 mx-auto">
      <div className="flex items-start gap-12 mb-16">
        <div className="lg:w-4/12">
          <UserIcon className="w-40 h-40 p-6 mx-auto mb-4 border rounded-full" />
          <div className="flex items-center justify-center mb-2">
            <StarIcon
              className="flex-shrink-0 w-5 h-5 text-yellow-400"
              aria-hidden="true"
            />
            <StarIcon
              className="flex-shrink-0 w-5 h-5 text-yellow-400"
              aria-hidden="true"
            />
            <StarIcon
              className="flex-shrink-0 w-5 h-5 text-yellow-400"
              aria-hidden="true"
            />
            <StarIcon
              className="flex-shrink-0 w-5 h-5 text-yellow-400"
              aria-hidden="true"
            />
            <StarIcon
              className="flex-shrink-0 w-5 h-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <p className="text-base text-center">Samir Sunar</p>
        </div>

        <div className="lg:w-8/12">
          <div className="flex justify-between mb-6">
            <h1 className="text-4xl">Qualification</h1>
            <a
              href="/"
              className="text-lg text-indigo-600 hover:text-indigo-900"
            >
              Edit
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="bg-violet-200 px-3 text-sm rounded-full py-1.5">
              Weight Lifting
            </span>
            <span className="bg-violet-200 px-3 text-sm rounded-full py-1.5">
              Power Lifting
            </span>
            <span className="bg-violet-200 px-3 text-sm rounded-full py-1.5">
              Cardio
            </span>
            <span className="bg-violet-200 px-3 text-sm rounded-full py-1.5">
              Calisthenics
            </span>
          </div>
        </div>
      </div>

      <table className="w-full mb-16 text-left">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="relative isolate py-3.5 px-3 text-center text-sm font-semibold text-gray-900"
            >
              Title
            </th>

            <th
              scope="col"
              className="relative py-3.5 px-3 text-sm font-semibold text-center text-gray-900"
            >
              Certificates
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="relative px-3 py-4 text-sm font-medium text-center text-gray-900">
              Personal Trainer
            </td>

            <td className="relative px-3 py-4 text-sm font-medium text-center">
              <a href="/" className="text-indigo-600 hover:text-indigo-900">
                View
              </a>
            </td>
          </tr>

          <tr className="border-b">
            <td className="relative px-3 py-4 text-sm font-medium text-center text-gray-900">
              Personal Trainer
            </td>

            <td className="relative px-3 py-4 text-sm font-medium text-center">
              <a href="/" className="text-indigo-600 hover:text-indigo-900">
                View
              </a>
            </td>
          </tr>

          <tr className="border-b">
            <td className="relative px-3 py-4 text-sm font-medium text-center text-gray-900">
              Personal Trainer
            </td>

            <td className="relative px-3 py-4 text-sm font-medium text-center">
              <a href="/" className="text-indigo-600 hover:text-indigo-900">
                View
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mb-16">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl">Description</h1>
          <a href="/" className="text-lg text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ipsa
          sit autem explicabo qui dolore, veritatis expedita minus quae aliquid,
          voluptatibus natus officia. Velit recusandae exercitationem minus sunt
          facilis vitae?
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl">Movitation Photos</h1>
          <a href="/" className="text-lg text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
        </div>
        <div className="flex gap-8 px-6">
          <img src="" alt="timg" />
          <img src="" alt="timg" />
          <img src="" alt="timg" />
          <img src="" alt="timg" />
          <img src="" alt="timg" />
          <img src="" alt="timg" />
        </div>
      </div>
    </section>
  );
};
