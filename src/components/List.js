import Card from "./UI/Card";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = (props) => {
  let arrList = props.countryList;
  // let searchResult = `${props.searchedName.at(0)}+${props.searchedName.slice(1)}`;
  // console.log(searchResult);
  if (props.searchedName)
    arrList = arrList.filter(item => item.name.startsWith(props.searchedName));
    
  return (
    <Card className={styles['list-wrapper']}>
      {arrList.map((item) => (
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
