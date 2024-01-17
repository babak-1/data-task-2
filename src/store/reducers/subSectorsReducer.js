import { createSlice } from "@reduxjs/toolkit";
import { getSubSectorThunk } from "../actions/filterActions";

const subSectorState = {
  loading: false,
  subSector: [],
  error: null,
  currentSubsector: "Money",
};

const subSectorReducer = createSlice({
  name: "subSector",
  initialState: subSectorState,
  reducers: {
    setCurrentSubsector: (state, action) => {
      state.currentSubsector = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubSectorThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubSectorThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getSubSectorThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.subSector = payload;
      });
  },
});
export const { setCurrentSubsector } = subSectorReducer.actions;
export default subSectorReducer.reducer;
