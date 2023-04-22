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
  console.log(detail);
  useEffect(() => {
    getTrainerInfo(myData._id)
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <TrainerProfileCard data={myData} />
      <TrainerCertificate photos={detail?.certificates} />
      <TrainerPhoto pictures={detail?.photos} />
    </>
  );
}
