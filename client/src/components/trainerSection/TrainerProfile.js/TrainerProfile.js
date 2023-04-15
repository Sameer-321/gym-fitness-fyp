import React from "react";
import { TrainerProfileCard } from "./TrainerProfileCard";
import {TrainerCertificate} from "./TrainerCertificate";
import {TrainerPhoto} from "./TrainerPhoto";

export function TrainerProfile() {
  return (
    <>
      <TrainerProfileCard />
      <TrainerCertificate />
      <TrainerPhoto />
    </>
  );
}
