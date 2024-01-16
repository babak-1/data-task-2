import { createSlice } from "@reduxjs/toolkit";
import { getCountriesThunk } from "../actions/filterActions";

const countryState = {
  loading: false,
  country: [],
  selectedCountry: null,
  error: null,
};

const countryReducer = createSlice({
  name: "country",
  initialState: countryState,
  reducers: {
    setSelectedCountryRedux: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
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
export const { setSelectedCountryRedux } = countryReducer.actions;
export default countryReducer.reducer;
