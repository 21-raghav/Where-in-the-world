import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import styles from "./RootPage.module.css";

const RootPage = () => {
  const [currentTheme, setCurrentTheme] = useState("");

  const dispatch = useDispatch();

  console.log("Root Page Rendered");

  const themeChangeHandler = () => {
    currentTheme === "" ? setCurrentTheme("dark") : setCurrentTheme("");
  };

  useEffect(() => {
    fetch("countries.json")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "countriesList", value: res }))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className={`${styles.wrapper} ${styles[currentTheme]}`}>
      <Header onThemeUpdate={themeChangeHandler} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootPage;
