import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { submitPhotos, submitCertificates } from "./trainerFormAPI";
export function TrainerPendingForm() {
  const cookies = new Cookies();

  //For Trainer Schema
  const [trainerForm, setTrainerForm] = useState({
    yearsOfExperience: 0,
    description: "",
    gender: "",
    trainerType: [],
    firstName: "",
    lastName: "",
  });

  const [photos, setPhotos] = useState({
    certificates: [],
    photos: [],
  });

  const handleChangeTrainer = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue =
      type === "checkbox" ? checked : type === "radio" ? value : value;
    setTrainerForm((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleCheckboxChange = (e) => {
    const target = e.target;
    const value = target.value;
    const isChecked = target.checked;
    setTrainerForm((prevState) => {
      if (isChecked) {
        return { ...prevState, trainerType: [...prevState.trainerType, value] };
      } else {
        const updatedYouCanTrain = prevState.trainerType.filter(
          (item) => item !== value
        );
        return { ...prevState, trainerType: updatedYouCanTrain };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(photos.photos);
    const res = async () => {
      if (cookies.get("token")) {
        const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${cookies.get("token")}`,
        };

        try {
          const response = await axios.post(
            `http://localhost:5000/api/v1/trainer-profile`,
            { trainerForm },
            { headers }
          );
          console.log(response);
          await submitCertificates(photos.certificates, response.data._id);
          const res = await submitPhotos(photos.photos, response.data._id);
          console.log(res);
          return res;
        } catch (err) {
          console.log(err);
        }
      }
    };

    res();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile Set-Up
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="yearsOfExperience"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Years of Experiece
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                  <input
                    type="number"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={trainerForm.yearsOfExperience}
                    onChange={(e) =>
                      setTrainerForm({
                        ...trainerForm,
                        yearsOfExperience: e.target.value,
                      })
                    }
                    min="0"
                    max="100"
                    step="1"
                    required
                    className="block text-sm font-medium leading-6 text-gray-500"
                    placeholder="please enter the year of experience in number"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={trainerForm.description}
                  onChange={(e) =>
                    setTrainerForm({
                      ...trainerForm,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself which is shown in your
                profile.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Certificates
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <input
                    type="file"
                    multiple
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onChange={(e) => {
                      const pictures = e.target.files;
                      setPhotos((prevState) => ({
                        ...prevState,
                        certificates: pictures,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photos
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <input
                    type="file"
                    multiple
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onChange={(e) => {
                      const pictures = e.target.files;
                      setPhotos((prevState) => ({
                        ...prevState,
                        photos: pictures,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={trainerForm.firstName}
                  onChange={handleChangeTrainer}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={trainerForm.lastName}
                  onChange={handleChangeTrainer}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Gender
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    name="gender"
                    value="male"
                    type="radio"
                    checked={trainerForm.gender === "male"}
                    onChange={handleChangeTrainer}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="gender"
                    value="female"
                    type="radio"
                    checked={trainerForm.gender === "female"}
                    onChange={handleChangeTrainer}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Female
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Training Category
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              The Area of field which you can train like
              bodybuilding,powerlifting etc
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                You can train
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      name="powerLifting"
                      value="powerlifting"
                      type="checkbox"
                      //checked={trainerForm.youCanTrain.includes("powerLifting")}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label className="font-medium text-gray-900">
                      Power Lifting
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      name="bodyBuilding"
                      type="checkbox"
                      value="bodybuilding"
                      //checked={trainerForm.youCanTrain.includes("bodyBuilding")}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label className="font-medium text-gray-900">
                      Body-Building
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      name="crossFit"
                      type="checkbox"
                      value="crossfit"
                      //checked={trainerForm.youCanTrain.includes("crossFit")}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Cross-Fit
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => window.location.reload(true)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
