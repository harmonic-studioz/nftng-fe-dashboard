import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewOrder: [],
};

const virwOrderSlice = createSlice({
  name: "viewOrder",
  initialState,
  reducers: {
    setViewOrder: (state, action) => {
      state.viewOrder = action.payload;
    },
  },
});

export default virwOrderSlice.reducer;
export const { setViewOrder } = virwOrderSlice.actions;
export const selectViewOrder = (state) => state.viewOrder.viewOrder;
