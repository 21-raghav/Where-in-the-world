import Card from "./components/UI/Card";
import styles from "./FilterList.module.css";

const FilterList = (props) => {
  // const dropDownHandler = (event) => {
  //   props.onChangeFilter(event.target.value);
  // };

  const searchResultHandler = (event) => {
    setTimeout(() => props.onInputChange(event.target.value), 1300);
  };

  const onInputChangeHandler = (event) => {
    props.onChangeContinent(event.target.value);
  };

  return (
    <Card className={styles["filterList-wrapper"]}>
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={searchResultHandler}
        spellcheck="false"
      />
      <select value={props.selectedContinent} onChange={onInputChangeHandler}>
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
