import Card from "./UI/Card";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = ({countryList}) => {
  if(countryList.length < 1)
    return (
      <Card className={styles['list-wrapper']}>
        <p className={styles["no-result-para"]}>No result!</p>
      </Card>
    );
  return (
    <Card className={styles['list-wrapper']}>
      {countryList.map((item) => (
        <ListItem
          key={item.numericCode}
          name={item.name}
          flag={item.flag}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </Card>
  );
};

export default List;
