import React, { useEffect, useState } from "react";
import { TrainerProfileCard } from "./TrainerProfileCard";
import { useLocation } from "react-router-dom";
import { TrainerCertificate } from "./TrainerCertificate";
import { TrainerPhoto } from "./TrainerPhoto";
import { getTrainerInfo } from "../../app/fetch/trainerFetch";
import { info } from "../../features/auth/authSlice";

import { useSelector, useDispatch } from "react-redux";

export function TrainerProfile() {
  const location = useLocation();
  const myData = location.state.info;
  const [subDetail, setSubDetail] = useState();
  console.log(subDetail);
  useEffect(() => {
    getTrainerInfo(myData._id)
      .then((data) => {
        setSubDetail(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <TrainerProfileCard data={myData} />
      <TrainerCertificate />
      <TrainerPhoto />
    </>
  );
}
