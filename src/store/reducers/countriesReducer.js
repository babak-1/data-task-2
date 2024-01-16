import { createSlice } from "@reduxjs/toolkit";
import { getCountriesThunk } from "../actions/filterActions";

const countryState = {
  loading: false,
  country: [],
  error: null,
};

const countryReducer = createSlice({
  name: "country",
  initialState: countryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountriesThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCountriesThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.country = payload;
      });
  },
});

export default countryReducer.reducer;
