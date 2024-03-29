import { useState } from "react";

export function TrainerPhoto({ pictures }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Photos
          </h2>
          <p className="hidden text-sm font-semibold text-gray-600 hover:text-gray-500 sm:block">
            some inspiration for you
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {Array.isArray(pictures) &&
            pictures.map((photo) => (
              <div key={photo.id} className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img
                    src={`http://localhost:5000/${photo?.link}`}
                    alt={photo?.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
