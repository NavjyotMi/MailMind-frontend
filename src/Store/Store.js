import { configureStore } from "@reduxjs/toolkit";
import UserApi from "./User/UserApi";
import userReducer from "./User/UserSlice";
import EmailApi from "./Email/EmailApi";
const store = configureStore({
  reducer: {
    [UserApi.reducerPath]: UserApi.reducer,
    [EmailApi.reducerPath]: EmailApi.reducer,
    user: userReducer,
  },
  middleware: (getMiddlware) =>
    getMiddlware().concat(UserApi.middleware, EmailApi.middleware),
});

export default store;
