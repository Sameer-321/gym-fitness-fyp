import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trainerReducer from "../features/trainer/trainerSlice";
import subscriptionReducer from "../features/subscription/subSlice";
import trainerSubReducer from "../features/TrainerSubscription/trainerSubSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    trainer: trainerReducer,
    subscription: subscriptionReducer,
    trainerSub: trainerSubReducer,
  },
});

export default store;
