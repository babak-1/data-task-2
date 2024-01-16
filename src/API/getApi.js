import { api } from ".";

export async function getCountries(indicator) {
  return api.get(`/api/country/?indicator=${indicator}`);
}

export async function getYears(countries, indicator) {
  return api.get(`/api/years/?countries=${countries}&indicator=${indicator}`);
}

export async function getSectors() {
  return api.get(`/api/sectors/`);
}

export async function getSubSectors(sector) {
  return api.get(`/api/subsectors/?sector=${sector}`);
}

export async function getIndicators(subsector) {
  return api.get(`/api/indicators/?subsector=${subsector}`);
}

export async function getBarChart(indicator, year, ranks, countries) {
  return api.get(
    `/api/ranks/?indicator=${indicator}&year1=${year}&ranks=${ranks}&countries=${countries}`
  );
}
