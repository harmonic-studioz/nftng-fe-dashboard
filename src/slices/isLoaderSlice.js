import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const isLoaderSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default isLoaderSlice.reducer;
export const { setIsLoading } = isLoaderSlice.actions;
export const selectIsLoading = (state) => state.isLoading.isLoading;
