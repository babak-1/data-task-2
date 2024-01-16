import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
