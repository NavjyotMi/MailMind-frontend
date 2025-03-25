import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeAccount: "",
  mainAccount: "",
};
const IsActive = createSlice({
  name: "active",
  initialState,
  reducers: {
    activeAcount: (state, action) => {
      (state.activeAccount = action.payload.activeAccount),
        (state.mainAccount = action.payload.mainAccount);
    },
  },
});

export const { activeAcount } = IsActive.actions;
export default IsActive.reducer;
