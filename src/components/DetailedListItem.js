import { Link } from "react-router-dom";

import Card from "./UI/Card";

import styles from "./DetailedListItem.module.css";

const DetailedListItem = (props) => {
  return (
    <Card>
      <div className={styles["back-button-wrapper"]}>
        <Link to=".." relative="path">
          <button>back</button>
        </Link>
      </div>
      <div className={styles["detail-data-wrapper"]}>
        <div className={styles["detail-data-img-wrapper"]}>
          <img src={props.data.flags.svg} alt="Country Flag" />
        </div>
        <div className={styles["detail-text-wrapper"]}>
          <h3>{props.data.name}</h3>
          <div className={styles["text-divider-wrapper"]}>
            <div>
              <p>
                <b>Native Name:&ensp;</b> {props.data.nativeName}
              </p>
              <p>
                <b>Population:&ensp;</b>{" "}
                {props.data.population.toLocaleString("en-IN")}
              </p>
              <p>
                <b>Region:&ensp;</b> {props.data.region}
              </p>
              <p>
                <b>Sub Region:&ensp;</b> {props.data.subregion}
              </p>
              <p>
                <b>Capital:&ensp;</b> {props.data.capital}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain:&ensp;</b> {props.data.topLevelDomain}
              </p>
              <p>
                <b>Currencies:&ensp;</b> {props.data.currencies[0].name}
              </p>
              <p>
                <b>Languages:&ensp;</b> {props.data.languages[0].name}
              </p>
            </div>
          </div>
          <div className={styles["border-country-text-wrapper"]}>
            <p>
              <b>Border Countries:&ensp;</b>{" "}
              {props.data.borders.map((item) => (
                <span className={styles["border-country-text"]}>{item}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DetailedListItem;
