import { configureStore } from "@reduxjs/toolkit";
import UserApi from "./User/UserApi";
import userReducer from "./User/UserSlice";
import EmailApi from "./Email/EmailApi";
import IsActive from "./Active/IsActive";

const store = configureStore({
  reducer: {
    [UserApi.reducerPath]: UserApi.reducer,
    [EmailApi.reducerPath]: EmailApi.reducer,
    user: userReducer,
    active: IsActive,
  },
  middleware: (getMiddlware) =>
    getMiddlware().concat(UserApi.middleware, EmailApi.middleware),
});

export default store;
