import { createSlice } from "@reduxjs/toolkit";
import { getSubscriptionDetail, createSubscription } from "./subFetch";

const initialState = {
  isSubscriber: false,
  // userInfo: null,
  subscribtionTier: "",
  productIdentity: "",
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
          subscribtionTier,
          productIdentity,
          amount,
          startDate,
          endDate,
          status,
          paymentMethod,
        } = action?.payload;
        state.isSubscriber = true;
        state.subscribtionTier = subscribtionTier;
        state.productIdentity = productIdentity;
        state.amount = amount;
        state.startDate = startDate;
        state.endDate = endDate;
        state.status = status;
        state.paymentMethod = paymentMethod;
        state.loading = "success";
      })
      .addCase(getSubscriptionDetail.rejected, (state, action) => {
        state.isSubscriber = false;
      });
  },
});

export const isSubscriber = (state) => state.subscription.isSubscriber;

export const SubInfo = (state) => ({
  isSubscriber: state.subscription.isSubscriber,
  subscribtionTier: state.subscription.subscribtionTier,
  productIdentity: state.subscription.productIdentity,
  amount: state.subscription.amount,
  startDate: state.subscription.startDate,
  endDate: state.subscription.endDate,
  status: state.subscription.status,
});

export const { login, register, LoginLoading } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
