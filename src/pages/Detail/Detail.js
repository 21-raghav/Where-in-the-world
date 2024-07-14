import { useLocation, Link } from "react-router-dom";

import Card from "../../components/UI-Card/Card";
import styles from "./Detail.module.css";

const DetailPage = () => {
  const { state } = useLocation();

  // console.log("DETAIL PAGE");

  return (
    <Card>
      <div className={styles["back-button-wrapper"]}>
        <Link to=".." relative="path">
          back
        </Link>
      </div>
      <div className={styles["detail-data-wrapper"]}>
        <div className={styles["detail-img-wrapper"]}>
          <img src={state.flags.svg} alt="Country Flag" />
        </div>
        <div className={styles["detail-text-wrapper"]}>
          <h3>{state.name}</h3>
          <ul>
            <li>
              <b>Native Name:&ensp;</b> {state.nativeName}
            </li>
            <li>
              <b>Population:&ensp;</b>{" "}
              {state.population.toLocaleString("en-IN")}
            </li>
            <li>
              <b>Region:&ensp;</b> {state.region}
            </li>
            <li>
              <b>Sub Region:&ensp;</b> {state.subregion}
            </li>
            <li>
              <b>Capital:&ensp;</b> {state.capital}
            </li>
            <li>
              <b>Top Level Domain:&ensp;</b> {state.topLevelDomain}
            </li>
            <li>
              <b>Currencies:&ensp;</b> {state.currencies[0].name}
            </li>
            <li>
              <b>Language:&ensp;</b> {state.languages[0].name}
            </li>
          </ul>
          <p>
            <b>Border Countries:&ensp;</b>{" "}
            {state.borders !== undefined ? (
              state.borders.map((item) => (
                <span key={item} className={styles["border-country-list-item"]}>
                  {item}
                </span>
              ))
            ) : (
              <span className={styles["no-result-para"]}>
                No border countries.
              </span>
            )}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DetailPage;
