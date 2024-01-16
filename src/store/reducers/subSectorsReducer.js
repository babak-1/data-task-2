import { createSlice } from "@reduxjs/toolkit";
import { getSubSectorThunk } from "../actions/filterActions";

const subSectorState = {
  loading: false,
  subSector: [],
  error: null,
};

const subSectorReducer = createSlice({
  name: "subSector",
  initialState: subSectorState,
  reducers: {},
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

export default subSectorReducer.reducer;
