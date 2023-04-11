import React, { createContext } from "react";
import {  UpdateProfile2 } from "./UpdateProfile2";
//create,provider,useContext

const data = createContext();
const data1 = createContext();

export function UpdateProfile() {
  const name = "sameer";
  const l_name = "sunar";

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={l_name}>
          <UpdateProfile2 />
        </data1.Provider>
      </data.Provider>
    </>
  );
}
export {data,data1}
