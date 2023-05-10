import { createSlice } from "@reduxjs/toolkit";

import {
  getTrainerSubscriptionDetail,
  createTrainerSubscription,
} from "./trainerSubFetch";

const initialState = {
  isTrainerSubscriber: false,
  userInfo: "",
  trainerId: "",
  subscribtionTier: "",
  productIdentity: "",
  amount: null,
  startDate: null,
  endDate: "",
  status: "",
  paymentMethod: "",
  id: "",
  query: "idle",
  error: "",
};

const trainerSubSlice = createSlice({
  name: "trainerSub",
  initialState,
  reducers: {
    hello(state, action) {
      console.log("hello called");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createTrainerSubscription.pending, (state, action) => {
        state.query = "loading";
      })
      .addCase(createTrainerSubscription.fulfilled, (state, action) => {
        getTrainerSubscriptionDetail();
      })
      .addCase(createTrainerSubscription.rejected, (state, action) => {
        alert("Please, try again");
      })
      .addCase(getTrainerSubscriptionDetail.pending, (state, action) => {
        state.query = "loading";
      })
      .addCase(getTrainerSubscriptionDetail.fulfilled, (state, action) => {
        //console.log(action.payload);
        if (action.payload) {
          const {
            trainerId,
            subscribtionTier,
            productIdentity,
            amount,
            startDate,
            endDate,
            status,
            paymentMethod,
            userInfo,
          } = action?.payload;

          //state management
          state.isTrainerSubscriber = true;
          state.id = action.payload?._id;
          state.trainerId = trainerId;
          state.subscribtionTier = subscribtionTier;
          state.productIdentity = productIdentity;
          state.amount = amount;
          state.startDate = startDate;
          state.endDate = endDate;
          state.status = status;
          state.paymentMethod = paymentMethod;
          state.userInfo = userInfo;
          state.query = "success";
        }
      })
      .addCase(getTrainerSubscriptionDetail.rejected, (state, action) => {
        state.query = "failed";
        state.error = action.error.message;
      });
  },
});

export const id = (state) => state.trainer?.id;
export const isTrainerSubscriber = (state) =>
  state.trainerSub?.isTrainerSubscriber;
export const userInfo = (state) => state.trainerSub?.userInfo;

export const { register, getToken, resetState } = trainerSubSlice.actions;
export default trainerSubSlice.reducer;
