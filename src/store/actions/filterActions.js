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
