import { useSelector, useDispatch } from "react-redux";

import {
  setCountries,
  setRegion,
  setSearchInput,
} from "../../store/countriesSlice.js";
import fetchCountriesData from "../../utils/fetchCountriesData.js";
import styles from "./Filter.module.css";

const Filter = () => {
  const currRegion = useSelector((state) => state.countries.region);
  const currInputSearch = useSelector((state) => state.countries.searchInput);
  const dispatch = useDispatch();

  const handleSearchInput = (event) => {
    dispatch(setSearchInput(event.target.value));
  };

  const handleSelectMenu = (event) => {
    dispatch(setRegion(event.target.value));

    const data = fetchCountriesData(`region/${event.target.value}`);
    data.then(
      (result) => dispatch(setCountries(result)),
      (error) => console.log(error)
    );
  };

  return (
    <section className={styles["section-filter"]}>
      <div className={styles.container}>
        <input
          type="search"
          placeholder="Search for a country..."
          value={currInputSearch}
          onChange={handleSearchInput}
          spellCheck="false"
        />
        <select value={currRegion} onInput={handleSelectMenu}>
          <option value="Africa">Africa</option>
          <option value="Americas">America's</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
