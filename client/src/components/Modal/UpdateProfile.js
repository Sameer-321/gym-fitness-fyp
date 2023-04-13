import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export function UpdateProfile(props) {
  const { state, info } = props;
  const [userInfo, setUserInfo] = useState();
  const [open, setOpen] = useState(true);
  const [pic, setPic] = useState("");

  useEffect(() => {
    setOpen(state);
  }, [state]);
  useEffect(() => {
    setUserInfo(info);
  }, [info]);

  const imageUpload = (e) => {
    setPic(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const submitButton = async () => {
    const formData = new FormData();
    formData.append("file", pic);
    if (userInfo.profilePictureLink === undefined) {
      await axios
        .post(
          `http://localhost:5000/api/v1/upload/img/${userInfo.id}`,
          formData,
          {
            headers: { Authorization: "send local token from cookies" },
          }
        )
        .then((res) => {
          console.log(res.data);
        });
    } else if (userInfo.profilePictureLink) {
      await axios
        .put(
          `http://localhost:5000/api/v1/upload/img/${userInfo.id}`,
          formData,
          {
            headers: { Authorization: "send local token from cookies" },
          }
        )
        .then((res) => {
          console.log(res.data);
        });
    }
    window.location.reload(true);
  };
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("file", pic);
    await axios
      .delete(`http://localhost:5000/api/v1/upload/img/${userInfo.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    window.location.reload(true);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Update Profile Picture
                    </Dialog.Title>
                    <div className="mt-2">
                      <input type="file" onChange={imageUpload} />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 sm:ml-3 sm:w-auto"
                    onClick={() => submitButton()}
                  >
                    Upload
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600 sm:mt-0 sm:w-auto"
                    onClick={() => handleDelete()}
                    // onClick={() => setOpen(false)}
                  >
                    Delete Profile
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
