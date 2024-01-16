import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../API/getApi";

export const getSectorThunk = createAsyncThunk(
  "getSector/fetchGetSector",
  async () => {
    const response = await api.getSectors();
    const sectors = response?.data;
    console.log(sectors, "sektordayam");
    return sectors;
  }
);

export const getSubSectorThunk = createAsyncThunk(
  "getSubSector/fetchGetSubSector",
  async (sector) => {
    const response = await api.getSubSectors(sector);
    const subSectors = response?.data;
    console.log(subSectors, "subsectordayam");
    return subSectors;
  }
);

export const getIndicatorsThunk = createAsyncThunk(
  "getIndicator/fetchGetIndicator",
  async (subsector) => {
    const response = await api.getIndicators(subsector);
    const indicators = response?.data;
    console.log(indicators, "indicators");
    return indicators;
  }
);

export const getCountriesThunk = createAsyncThunk(
  "getCountry/fetchGetCountry",
  async (indicator) => {
    const response = await api.getCountries(indicator);
    const countries = response?.data;
    console.log(countries, "country");
    return countries;
  }
);
