import { createSlice } from "@reduxjs/toolkit";
import { getYearsThunk } from "../actions/filterActions";

const initialState = {
  loading: false,
  year: [],
  error: null,
};

const yearReducer = createSlice({
  name: "year",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getYearsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getYearsThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getYearsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.year = payload;
      });
  },
});

export default yearReducer.reducer;
