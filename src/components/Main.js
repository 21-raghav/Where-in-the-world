import { useState, useRef } from "react";

import FilterList from "../FilterList";
import List from "./List";

let COUNTRIES_DATA;

//   fn to fetch countries data
try {
    const data = await fetch("countries.json");
    const result = await data.json();
    COUNTRIES_DATA = result;
  } catch (err) {
    console.log(err);
}

const Main = () => {
  const [continent, setContinent] = useState("Asia");
  const [countryName, setCountryName] = useState("");

  // store countries data to work with
  const ref = useRef(COUNTRIES_DATA);

  //   fn's to update states from filterlist component
  const getContinent = (cont) => {
    setContinent(cont);
  };

  const getCountry = (currName) => {
    setCountryName(currName);
  };

  //   list of countries to display in app
  let filteredRegionList = ref.current.filter((item) => {
    return item.region === continent;
  });

  if (String(countryName) !== "") {
    const name = `${countryName.at(0).toUpperCase()}${countryName.slice(1)}`;
    filteredRegionList = filteredRegionList.filter((item) =>
      item.name.startsWith(name)
    );
  }

  return (
    <main>
      <FilterList
        selectedContinent={continent}
        onChangeContinent={getContinent}
        onInputChange={getCountry}
      />
      <List countryList={filteredRegionList} />
    </main>
  );
};

export default Main;
