import { configureStore } from "@reduxjs/toolkit";
import isAuthReducer from "../slices/isAuthSlice";
import isLoaderReducer from "../slices/isLoaderSlice";
import viewOrderReducer from "../slices/viewOrderSlice";

export const store = configureStore({
  reducer: {
    isAuth: isAuthReducer,
    isLoading: isLoaderReducer,
    viewOrder: viewOrderReducer,
  },
});
