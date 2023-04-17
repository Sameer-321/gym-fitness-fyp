import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trainerReducer from "../features/trainer/trainerSlice";
import subscriptionReducer from "../features/subscription/subSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    trainer: trainerReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
