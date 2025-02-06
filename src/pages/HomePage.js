import Filter from "../components/Filter/Filter.js";
import List from "../components/List/List.js";

import store from "../store/store.js";
import { setCountries } from "../store/countriesSlice.js";
import fetchCountriesData from "../utils/fetchCountriesData.js";

const HomePage = () => {
  return (
    <>  
      <Filter />
      <List />
    </>
  );
};
export default HomePage;

// loader function
export const fetchCountries = async () => {
  // Return existing data if already fetched
  const state = store.getState();

  if (state.countries.countriesArray.length > 0) {
    return state;
  }

  const data = fetchCountriesData(`region/${state.countries.region}`);
  data.then(
    (result) => store.dispatch(setCountries(result)),
    (error) => console.log(error)
  );
  return data;
};
