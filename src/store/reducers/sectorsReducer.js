import { createSlice } from "@reduxjs/toolkit";
import { getSectorThunk } from "../actions/filterActions";

const indicatorState = {
  loading: false,
  sector: [],
  error: null,
};

const sectorReducer = createSlice({
  name: "sector",
  initialState: indicatorState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSectorThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSectorThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getSectorThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.sector = payload;
      });
  },
});

export default sectorReducer.reducer;
