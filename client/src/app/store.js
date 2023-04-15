import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trainerReducer from "../features/trainer/trainerSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    trainer: trainerReducer,
  },
});

export default store;
