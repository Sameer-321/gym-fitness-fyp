import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApiSlice";
import authReducer from "../features/auth/authSlice";
  
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(authApi.middleware),
  devTools: true,
});

export default store;