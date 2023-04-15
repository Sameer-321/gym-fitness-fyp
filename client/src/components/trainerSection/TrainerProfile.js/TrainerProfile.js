import React, { useEffect } from "react";
import { TrainerProfileCard } from "./TrainerProfileCard";
import {TrainerCertificate} from "./TrainerCertificate";
import {TrainerPhoto} from "./TrainerPhoto";
import { getTrainerInfo } from "../../../features/trainer/trainerFetch";
import Cookies from "universal-cookie";
export function TrainerProfile() {
  const cookies = new Cookies();
  useEffect(()=>{
    getTrainerInfo(id,token=cookies.get("token"))
  })
  return (
    <>
      <TrainerProfileCard />
      <TrainerCertificate />
      <TrainerPhoto />
    </>
  );
}
