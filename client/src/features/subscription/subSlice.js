import { createSlice } from "@reduxjs/toolkit";
import { getSubscriptionDetail, createSubscription } from "./subFetch";

const initialState = {
  isSubscriber: false,
  userInfo: null,
  subscribtionTier: "",
  amount: "",
  startDate: "",
  endDate: "all",
  status: "", // active,expired,cancelled ----> cancelled need to be exclude
  loading: "idle",
  paymentMethod: "khalti",
  error: "",
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    login(state, action) {
      console.log("login called");
    },
    register(state, action) {
      const { token } = action.payload;
      console.log(token);
    },
    LoginLoading(state) {
      state = {
        // ...state,
        role: "loading",
        status: "loading", //idle,loading,succeeded,failed
        error: null,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createSubscription.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.loading = "success";

        const { token } = action.payload;

        //state management
        state.isLoggedIn = true;
        state.jwt = token;
        state.status = "success";
      })
      .addCase(createSubscription.rejected, (state) => {
        console.log("error while creating your subscription");
      })
      .addCase(getSubscriptionDetail.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getSubscriptionDetail.fulfilled, (state, action) => {
        console.log(action.payload);
        const {
          userInfo,
          subscribtionTier,
          amount,
          startDate,
          endDate,
          status,
          paymentMethod,
        } = action.payload;
        state.isSubscriber = true;
        state.subscribtionTier = subscribtionTier;
        state.amount = amount;
        state.startDate = startDate;
        state.endDate = endDate;
        state.status = status;
        state.paymentMethod = paymentMethod;
        state.userInfo = userInfo;
      })
      .addCase(getSubscriptionDetail.rejected, (state, action) => {
        state.isSubscriber = false;
      });
  },
});

export const isLoggedIn = (state) => state.auth.isLoggedIn;

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

export const { login, register, LoginLoading } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
