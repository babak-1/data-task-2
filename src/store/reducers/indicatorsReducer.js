import { createSlice } from "@reduxjs/toolkit";
import { getIndicatorsThunk } from "../actions/filterActions";

const indicatorState = {
  loading: false,
  indicator: [],
  selectedIndicator: "Broad Money M3",
  error: null,
};

const indicatorReducer = createSlice({
  name: "indicator",
  initialState: indicatorState,
  reducers: {
    setSelectedIndicatorRedux: (state, action) => {
      state.selectedIndicator = action.payload;
    },
  },
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
export const { setSelectedIndicatorRedux } = indicatorReducer.actions;
export default indicatorReducer.reducer;
