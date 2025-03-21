import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  picture: "",
  linkedAccounts: [],
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUserToSlice: (state, action) => {
      (state.fname = action.payload.fname),
        (state.lname = action.payload.lname),
        (state.email = action.payload.email),
        (state.picture = action.payload.picture),
        (state.linkedAccounts = action.payload.linkedAccounts);
    },
  },
});

export const { addUserToSlice } = UserSlice.actions;
export default UserSlice.reducer;
