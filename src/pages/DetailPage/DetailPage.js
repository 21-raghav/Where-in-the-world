import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import fetchCountriesData from "../../utils/fetchCountriesData";

import styles from "./DetailPage.module.css";

const DetailPage = () => {
  const [countryInfo, setCountryInfo] = useState();
  const countryCode = useParams();

  useEffect(() => {
    // fetch country info based on country code extracted from route
    fetchCountriesData(`alpha/${countryCode.detail}`).then((result) => {
      setCountryInfo(result[0]);
    });
  }, [countryCode]);

  return (
    <section className={styles["detail-pg-wrapper"]} >
      {!countryInfo ? (
        <p className={styles["detail-pg-wrapper__para"]}>Loading data...</p>
      ) : (
        <>
          <Link
            className={styles["detail-pg-wrapper__link-back"]}
            to=".."
            relative="path"
          >
            back
          </Link>
          <div className={styles["info-wrapper"]}>
            <div className={styles["info-wrapper__img-box"]}>
              <img src={countryInfo.flags.svg} alt="Country Flag" />
            </div>
            <div className={styles["info-wrapper__text-box"]}>
              <h3>{countryInfo.name.common}</h3>
              <ul className={styles["country-info-list"]}>
                <li>
                  <b>Official Name:&ensp;</b> {countryInfo.name.official}
                </li>
                <li>
                  <b>Population:&ensp;</b>{" "}
                  {countryInfo.population.toLocaleString("en-IN")}
                </li>
                <li>
                  <b>Region:&ensp;</b> {countryInfo.region}
                </li>
                <li>
                  <b>Sub Region:&ensp;</b> {countryInfo.subregion}
                </li>
                <li>
                  <b>Capital:&ensp;</b> {countryInfo.capital}
                </li>
                <li>
                  <b>Driving Side:&ensp;</b>{" "}
                  {countryInfo.car.side[0].toUpperCase() +
                    countryInfo.car.side.slice(1)}
                </li>
              </ul>
              <div className={styles["border-countries-box"]}>
                <p className={styles["border-countries-box__para"]}>
                  <b>Border Countries:&ensp;</b>
                </p>
                <div className={styles["border-countries-list"]}>
                  {countryInfo.borders !== undefined ? (
                    countryInfo.borders.map((item) => (
                      <Link
                        key={item}
                        className={styles["border-countries-list__link-btn"]}
                        to={`../${item}`}
                        relative="route"
                      >
                        {item}
                      </Link>
                    ))
                  ) : (
                    <p>No land borders</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailPage;
