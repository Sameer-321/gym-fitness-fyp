import React, { useEffect } from "react";
import { TrainerProfileCard } from "./TrainerProfileCard";
import { TrainerCertificate } from "./TrainerCertificate";
import { TrainerPhoto } from "./TrainerPhoto";
import { getTrainerInfo } from "../../../features/trainer/trainerFetch";
// import Cookies from "universal-cookie";
import { info, name } from "../../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// export function TrainerProfile() {
//   const credientialInfo = useSelector(info);
//   const dispatch = useDispatch();
//   const location = useLocation();

//   const detail = location.state.detail;
//   const pp = location.state.pp;

//   console.log(credientialInfo.id);
//   // const cookies = new Cookies();
//   useEffect(() => {
//     dispatch(getTrainerInfo(credientialInfo.id));
//   }, []);
//   return (
//     <>
//       <TrainerProfileCard />
//       <TrainerCertificate />
//       <TrainerPhoto />
//     </>
//   );
// }

export const TrainerProfile = () => {
  const location = useLocation();

  const detail = location.state.detail;
  const pp = location.state.pp;
  console.log(detail);

  return (
    <section className="container px-6 my-40 mx-auto">
      <div className="flex items-start gap-16 mb-16">
        <TrainerProfileCard
          detail={{
            profile: pp,
            name: detail.firstName + " " + detail.lastName,
            qualification: detail.trainerType,
            exp: detail.yearsOfExperience,
          }}
        />
      </div>
      <TrainerCertificate photos={detail.certificates} />
      <div className="mb-16">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl">Description</h1>
          {/* / */}
        </div>
        <div>{detail.description}</div>
      </div>
      <TrainerPhoto pictures={detail.photos} />
    </section>
  );
};
