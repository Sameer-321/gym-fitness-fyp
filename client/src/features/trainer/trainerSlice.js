import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { getTrainerInfo } from "./trainerFetch";

const cookies = new Cookies();

const initialState = {
  isTrainer: false,
  id: "",
  gender: null,
  trainerType: null,
  yearsofExperience: "",
  description: "",
  photos: "",
  certificates: "",
  userInfo: "",
  status: "idle", //idle,loading,succeeded,failed
  error: null,
};

const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    hello(state, action) {
      console.log("hello called");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTrainerInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTrainerInfo.fulfilled, (state, action) => {
        console.log(action.payload)
        const {
         
          gender,
          trainerType,
          yearsOfExperience,
          description,
          photos,
          certificates,
          userInfo,
        } = action.payload;

        //state management
        // state.id = _id;
        state.gender = gender;
        state.trainerType = trainerType;
        state.yearsOfExperience = yearsOfExperience;
        state.description = description;
        state.photos = photos;
        state.certificates = certificates;
        state.userInfo = userInfo;
        state.status = "success";
      })
      .addCase(getTrainerInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const isLoggedIn = (state) => state.auth.isLoggedIn;
// export const token = (state) => state.auth.jwt;
// export const name = (state) => state.auth.name;
// export const email = (state) => state.auth.email;
// export const status = (state) => state.auth.status;
// export const err = (state) => state.auth.error;
// export const id = (state) => state.auth.id;
// export const Profile = (state) => state.auth?.profilePictureLink;

// export const info = (state) => ({
//   id: state.auth.id,
//   isLoggedIn: state.auth.isLoggedIn,
//   token: state.auth.jwt,
//   name: state.auth.name,
//   email: state.auth.email,
//   role: state.auth.role,
//   error: state.auth.error,
//   status: state.auth.status,
//   profilePictureLink: state.auth?.profilePictureLink,
// });

export const { register, getToken, resetState } = trainerSlice.actions;
export default trainerSlice.reducer;
