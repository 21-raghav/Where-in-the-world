import Card from "./UI/Card";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = ({countryList}) => {
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
