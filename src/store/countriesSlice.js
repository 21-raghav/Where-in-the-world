import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countriesArray: [],
    region: "Asia",
    searchInput: "",
  },
  reducers: {
    setCountries: (state, action) => {
      state.countriesArray = [...action.payload];
      state.filteredCountries = [...action.payload];
    },
    setRegion: (state, action) => {
      state.region = action.payload;
      state.searchInput = "";
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setCountries, setRegion, setSearchInput } =
  countriesSlice.actions;
export default countriesSlice.reducer;
