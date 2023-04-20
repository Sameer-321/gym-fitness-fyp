import { useDispatch, useSelector } from "react-redux";
import { certificates } from "../../../features/trainer/trainerSlice";
import { useEffect, useState } from "react";

export function TrainerCertificate() {
  const cer = useSelector(certificates);
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    setPhotos(cer);
  }, [cer]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Certificates
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {Array.isArray(photos) &&
            photos.map((photo) => (
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

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
