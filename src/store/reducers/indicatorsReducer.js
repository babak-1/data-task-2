import { createSlice } from "@reduxjs/toolkit";
import { getIndicatorsThunk } from "../actions/filterActions";

const sectorState = {
  loading: false,
  indicator: [],
  error: null,
};

const indicatorReducer = createSlice({
  name: "indicator",
  initialState: sectorState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIndicatorsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIndicatorsThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getIndicatorsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.indicator = payload;
      });
  },
});

export default indicatorReducer.reducer;
