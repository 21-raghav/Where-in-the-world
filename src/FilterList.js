import Card from "./components/UI/Card";
import styles from "./FilterList.module.css";

const FilterList = (props) => {
  const dropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const searchResultHandler = (event) => {
    setTimeout(() => props.onChangeName(event.target.value), 1000);
  };

  return (
    <Card>
      <div className={styles["filterList-wrapper"]}>
        <input type="search" placeholder="Search for a country..."onChange={searchResultHandler}/>
        <select value={props.selected} onChange={dropDownHandler}>
          <option value="Africa">Africa</option>
          <option value="Americas">America's</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </Card>
  );
};

export default FilterList;
