import styles from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={styles['list-item']}>
      <div className={styles['list-item-img']}>
        <img src={props.flag} alt="Country Flag" />
      </div>
      <div className={styles['list-item-text']}>
        <h3>{props.name}</h3>
        <ul>
          <li><span className={styles.bold}>Population:</span>{props.population}</li>
          <li><span className={styles.bold}>Region:</span>{props.region}</li>
          <li><span className={styles.bold}>Capital:</span>{props.capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default ListItem;
