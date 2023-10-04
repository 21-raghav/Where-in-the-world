import { useState } from "react";

import Card from "./UI/Card";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = ({ list }) => {
  const [region, setRegion] = useState("Asia");
  const [searchedName, setSearchedName] = useState();

  const filteredRegionList = list.filter((item) => item.region === region);

  const setRegionHandler = (event) => {
    setRegion(event.target.value);
  };

  const searchResultHandler = (event) => {
    const enteredName = event.target.value.trim();
    if (enteredName !== "") {
      let words, correctedName = "";
      words = enteredName.split(" ");
      for (let i = 0; i < words.length; i++)
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      correctedName = words.join(" ");
      setSearchedName(filteredRegionList.filter(item => item.name.startsWith(correctedName) === true));
    } else {
      setSearchedName();
    }
  };

  let finalList, noResult = false;
  if(searchedName !== undefined) {
    if(searchedName.length === 0)
      noResult = true;
    else 
      finalList = searchedName;
  } else { 
    finalList = filteredRegionList;
  }

  return (
    <>
    <Card>
      <div className={styles["filterList-wrapper"]}>
        <input type="search" placeholder="Search for a country..." onChange={searchResultHandler}/>
        <select value={region} onChange={setRegionHandler}>
          <option value="Africa">Africa</option>
          <option value="Americas">America's</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      </Card>
      {noResult && <p className={styles["no-result-para"]}>No country with this name in selected region.</p>}
      <Card className={styles["list-wrapper"]}>
      
      {!noResult && finalList.map((item) => (
        <ListItem
          key={item.numericCode}
          url={item.alpha3Code}
          name={item.name}
          flag={item.flags.svg}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </Card>
    </>
  );
};

export default List;
