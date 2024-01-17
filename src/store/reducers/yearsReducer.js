import { createSlice } from "@reduxjs/toolkit";
import { getYearsThunk } from "../actions/filterActions";

const initialState = {
  loading: false,
  year: [],
  error: null,
  selectedYear: "2019",
};

const yearReducer = createSlice({
  name: "year",
  initialState: initialState,
  reducers: {
    setSelectedYearRedux: (state, action) => {
      state.selectedYear = action.payload;
    },
  },
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
export const { setSelectedYearRedux } = yearReducer.actions;

export default yearReducer.reducer;
