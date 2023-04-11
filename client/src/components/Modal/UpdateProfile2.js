import React, { useContext } from "react";
import { data, data1 } from "./UpdateProfile";

export function UpdateProfile2() {
  const name = useContext(data)  
  const lastName = useContext(data1) 
  return <>
  {lastName}
  {name}
  </>;
}
