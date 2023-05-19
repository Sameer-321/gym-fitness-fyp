import React, { useEffect, useState } from "react";
import { TrainerProfileCard } from "./TrainerProfileCard";
import { TrainerCertificate } from "./TrainerCertificate";
import { TrainerPhoto } from "./TrainerPhoto";
import { getTrainerInfo } from "../../../features/trainer/trainerFetch";
// import Cookies from "universal-cookie";
import { trainerProfile } from "../../../features/trainer/trainerSlice";
import { Profile } from "../../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

export const TheTrainerProfile = () => {
  //   const location = useLocation();

  //   const detail = location.state.detail;
  //   const pp = location.state.pp;
  //   console.log(detail);
  const PP = useSelector(Profile);
  const profile = useSelector(trainerProfile);
  console.log(PP);

  const [detail, setDetail] = useState();
  const [pp, setPp] = useState();

  useEffect(() => {
    setDetail(profile);
    setPp(PP);
    console.log(profile);
  }, [profile]);
  console.log(pp);
  return (
    <section className="container px-6 my-40 ml-[10%] mr-auto">
      <div className="flex items-start gap-16 mb-16">
        <TrainerProfileCard
          detail={{
            profile: "http://localhost:5000/" + pp,
            name: detail?.firstName + " " + detail?.lastName,
            qualification: detail?.trainerType,
            exp: detail?.yearsofExperience,
          }}
        />
      </div>
      <TrainerCertificate photos={detail?.certificates} />
      <div className="mb-16 ml-[10%]">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl">Description</h1>
          {/* / */}
        </div>
        <div>{detail?.detail}</div>
      </div>
      <TrainerPhoto pictures={detail?.photos} />
    </section>
  );
};
