import React, { useEffect } from "react";
import { TrainerProfileCard } from "./TrainerProfileCard";
import { TrainerCertificate } from "./TrainerCertificate";
import { TrainerPhoto } from "./TrainerPhoto";
import { getTrainerInfo } from "../../../features/trainer/trainerFetch";
import Cookies from "universal-cookie";
import { info } from "../../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
export function TrainerProfile() {
  const credientialInfo = useSelector(info);
  const dispatch = useDispatch();
  console.log(credientialInfo.id);
  const cookies = new Cookies();
  useEffect(() => {
    dispatch(getTrainerInfo(credientialInfo.id));
  }, []);
  return (
    <>
      <TrainerProfileCard />
      <TrainerCertificate />
      <TrainerPhoto />
    </>
  );
}
