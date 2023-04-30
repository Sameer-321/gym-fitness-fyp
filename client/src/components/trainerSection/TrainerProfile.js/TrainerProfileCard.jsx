import React from "react";

export function TrainerProfileCard(props) {
  const { profile, name, qualification, exp } = props.detail;
  // console.log(exp);

  return (
    <>
      <div className="lg:w-4/12 ml-[60px]">
        <img
          className="w-56 h-56 p-6 mx-auto mb-4 border rounded-full"
          src={profile}
          alt=""
          loading="lazy"
        />
        <p className="text-base text-center font-semibold text-[26px] mt-[25px]">
          {name}
        </p>
      </div>

      <div className="lg:w-8/12">
        <div className=" bg-purple-600 rounded-full text-center w-2/5  mr-auto mb-7 p-1">
          <span className="font-semibold text-stone-200  ">
            Years of Experience:
          </span>
          <span className="font-bold text-slate-900 text-[20px] ">{exp}</span>
        </div>
        <div className="flex justify-between mb-6">
          <h1 className="text-4xl">Qualification:</h1>
          {/* <a href="/" className="text-lg text-indigo-600 hover:text-indigo-900">
            Edit
          </a> */}
        </div>
        <div className="flex flex-wrap gap-4">
          {qualification.map((i) => {
            return (
              <span className="bg-violet-200 px-3 text-sm rounded-full py-1.5">
                {i}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
