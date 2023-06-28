import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import FilterList from "./FilterList";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredRegion, setFilteredRegion] = useState("Asia");
  const [searchedName, setSearchedName] = useState("");

  const themeChangeHandler = () => {
    if (theme === "dark") setTheme("");
    else setTheme("dark");
  };

  const changeRegion = (selectedRegion) => {
    setFilteredRegion(selectedRegion);
  };

  const searchCountry = (enteredString) => {
    setSearchedName(enteredString);
  };

  async function fetchCountriesHandler () {
    const res = await fetch('countries.json');
    const result = await res.json();
    setCountries(result);
  }

  fetchCountriesHandler();

  const filteredRegionList = countries.filter((item) => {
    return item.region === filteredRegion;
  });
  
  return (
    <div className={`wrapper ${theme}`}>
      <Header onConfirm={themeChangeHandler} />
      <FilterList selected={filteredRegion} onChangeFilter={changeRegion} onChangeName={searchCountry}/>
      <List countryList={filteredRegionList} searchedName={searchedName}/>
    </div>
  );
}

export default App;
