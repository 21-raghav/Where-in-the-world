import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../../../components/UI-Card/Card";
import styles from "./FilterList.module.css";

const FilterList = () => {
  const countriesList = useSelector((state) => state.countryList);
  const currContinent = useSelector((state) => state.currContinent);

  console.log("Filter");

  const dispatch = useDispatch();

  const [currCountryName, setCurrCountryName] = useState("");

  let filteredCountriesList;
  let searchedCountryNameList;

  // list filtered according to selected continent
  if (countriesList.length > 0) {
    filteredCountriesList = countriesList.filter((item) => {
      return item.region === currContinent;
    });
  }

  // list filtered according to user entered country name
  if (String(currCountryName) !== "") {
    const name = `${currCountryName.at(0).toUpperCase()}${currCountryName.slice(
      1
    )}`;
    searchedCountryNameList = filteredCountriesList.filter((item) =>
      item.name.startsWith(name)
    );
  }

  const textInputHandler = (event) => {
    setTimeout(() => {
      setCurrCountryName(event.target.value);
    }, 1300);
  };

  const optionSelectHandler = (event) => {
    dispatch({ type: "continent", continent: event.target.value });
    dispatch({ type: "pageNum", pgNum: 1 });
  };

  useEffect(() => {
    if (
      searchedCountryNameList !== undefined &&
      searchedCountryNameList.length > 0
    ) {
      dispatch({ type: "filterList", fList: searchedCountryNameList });
      dispatch({ type: "pageNum", pgNum: 1 });
    } else if (filteredCountriesList !== undefined) {
      dispatch({ type: "filterList", fList: filteredCountriesList });
    }
  }, [dispatch, searchedCountryNameList, filteredCountriesList]);

  return (
    <Card className={styles["filterList-wrapper"]}>
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={textInputHandler}
        onBlur={(e) => (e.target.value = "")}
        // spellcheck="false"
      />
      <select value={currContinent} onInput={optionSelectHandler}>
        <option value="Africa">Africa</option>
        <option value="Americas">America's</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </Card>
  );
};

export default FilterList;
