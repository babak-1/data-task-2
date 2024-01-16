import { configureStore } from "@reduxjs/toolkit";
import sectorsReducer from "./reducers/sectorsReducer";
import subSectorsReducer from "./reducers/subSectorsReducer";
import indicatorsReducer from "./reducers/indicatorsReducer";
import countriesReducer from "./reducers/countriesReducer";
import yearsReducer from "./reducers/yearsReducer";

export const store = configureStore({
  reducer: {
    sectors: sectorsReducer,
    subSectors: subSectorsReducer,
    indicators: indicatorsReducer,
    countries: countriesReducer,
    years: yearsReducer,
  },
});
