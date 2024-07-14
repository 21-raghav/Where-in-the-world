import { useSelector } from "react-redux";

import Card from "../../../../components/UI-Card/Card";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.css";

const List = () => {
  const indexedList = useSelector((state) => state.renderList);

  console.log("List");

  if (indexedList === undefined || indexedList.length < 0)
    return (
      <Card className={styles["list-wrapper"]}>
        <p className={styles["no-result-para"]}>Loading...</p>
      </Card>
    );

  return (
    <Card className={styles["list-wrapper"]}>
      {/* <div className={styles["list-wrapper"]}> */}
        {indexedList.map((item) => (
          <ListItem
            key={item.numericCode}
            url={item.alpha3Code}
            name={item.name}
            flag={item.flag}
            population={item.population}
            region={item.region}
            capital={item.capital}
            details={item}
          />
        ))}
      {/* </div> */}
    </Card>
  );
};

export default List;
