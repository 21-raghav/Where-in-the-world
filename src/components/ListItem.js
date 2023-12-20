import { Link } from 'react-router-dom';

import styles from "./ListItem.module.css";

const ListItem = (props) => {
  console.log("run from list-item");
  return (
    <Link to={props.url} preventScrollReset={true} style={{ textDecoration: 'none' }}>
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
    </Link>
  );
};

export default ListItem;
