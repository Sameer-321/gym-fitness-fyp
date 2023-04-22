import { createSlice } from "@reduxjs/toolkit";

import { getTrainerInfo } from "../../app/fetch/trainerFetch";

const initialState = {
  isTrainer: false,
  id: "",
  firstName: "",
  lastName: "",
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
        console.log(action.payload);
        const {
          _id,
          firstName,
          lastName,
          gender,
          trainerType,
          yearsOfExperience,
          description,
          photos,
          certificates,
          userInfo,
        } = action.payload;

        //state management
        state.id = _id;
        state.firstName = firstName;
        state.lastName = lastName;
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

export const firstName = (state) => state.trainer?.firstName;
export const lastName = (state) => state.trainer?.lastName;
export const certificates = (state) => state.trainer?.certificates;
export const photos = (state) => state.trainer?.photos;

export const { register, getToken, resetState } = trainerSlice.actions;
export default trainerSlice.reducer;