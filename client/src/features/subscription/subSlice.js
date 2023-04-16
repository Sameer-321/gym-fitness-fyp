import { createSlice } from "@reduxjs/toolkit";
import { getMe, createSubscription } from "./subFetch";

const cookies = new Cookies();

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
};

const authSlice = createSlice({
  name: "auth",
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
      .addCase(createSubAPI.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.loading = "succeeded";

        const { token } = action.payload;

        //state management
        state.isLoggedIn = true;
        state.jwt = token;
        state.status = "success";
      })
      .addCase(loginfetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(registerfetch.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      // .addCase(getMe.pending, (state) => {
      //   state.status = "loading";
      //   state.role = "loading";
      // })
      .addCase(getMe.fulfilled, (state, action) => {
        //console.log(action.payload);
        const { email, name, _id, role } = action.payload.data;
        state.isLoggedIn = true;
        state.id = _id;
        state.name = name;
        state.email = email;
        state.status = "success";
        state.role = role;
        state.profilePictureLink = action.payload.data?.profilePicture?.link;
        //token set at last
        const token = cookies.get("token");
        state.jwt = token;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(state.error);
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

export const { login, logout, register, getToken, LoginLoading } =
  authSlice.actions;
export default authSlice.reducer;
