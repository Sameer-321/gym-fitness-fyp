import React, { useEffect, useState } from "react";
import { TrainerProfileCard } from "./TrainerProfileCard";
import { useLocation } from "react-router-dom";
import { TrainerCertificate } from "./TrainerCertificate";
import { TrainerPhoto } from "./TrainerPhoto";
import { getTrainerInfo } from "../../app/fetch/trainerFetch";

export function TrainerProfile() {
  const location = useLocation();
  const myData = location.state.info;
  const [detail, setDetail] = useState();
  // console.log(detail, "bbbbbbbbbbbbbbbbbb");
  useEffect(() => {
    getTrainerInfo(myData._id)
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="container px-6 my-40 mx-auto">
        <div className="flex items-start gap-16 mb-16">
          <TrainerProfileCard
            detail={myData}
            qua={detail?.trainerType}
            exp={detail?.yearsOfExperience}
            name={detail?.firstName + " " + detail?.lastName}
          />
        </div>
        <TrainerCertificate photos={detail?.certificates} />
        <div className="mb-16">
          <div className="flex justify-between mb-6">
            <h1 className="text-3xl">Description</h1>
            {/* / */}
          </div>
          <div>{detail?.description}</div>
        </div>
        <TrainerPhoto pictures={detail?.photos} />
      </section>
    </>
  );
}
