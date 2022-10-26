import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: {
    token: "",
  },
};

const isAuthSLice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export default isAuthSLice.reducer;
export const { setIsAuth } = isAuthSLice.actions;
export const selectIsAuth = (state) => state.isAuth.isAuth;
