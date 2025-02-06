import { useSelector } from "react-redux";

import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

const List = () => {
  const allCountries = useSelector((state) => state.countries.countriesArray);
  const searchedCharacter = useSelector((state) => state.countries.searchInput);

  const inputRegex = new RegExp(`^${searchedCharacter.toLowerCase()}`, "i");
  let filteredCountries = allCountries.filter((country) =>
    inputRegex.test(country.name.common.toLowerCase())
  );

  const countriesToDisplay =
    filteredCountries.length === 0 ? allCountries : filteredCountries;

  return (
    <>
      {(searchedCharacter !== "" && filteredCountries.length === 0) ||
      countriesToDisplay.length === 0 ? (
        <section>
          <p className={styles["no-result-para"]}>No result found!</p>
        </section>
      ) : (
        <section className={styles["section-list"]}>
          {countriesToDisplay.map((item) => (
            <ListItem
              key={item.cca2}
              url={item.cca3}
              name={item.name.common}
              flag={item.flags.svg}
              population={item.population}
              region={item.region}
              capital={item.capital}
              details={item}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default List;
