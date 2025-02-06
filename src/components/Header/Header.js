import { useState, useEffect } from "react";

import themeIcon from "../../assets/brightness-and-contrast.png";
import styles from "./Header.module.css";

const Header = () => {
  const [currTheme, setCurrTheme] = useState(
    localStorage.getItem("theme") || (prefersDarkScheme() ? "dark" : "light")
  );

  function prefersDarkScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const handleThemeChange = () => {
    const newTheme = currTheme === "light" ? "dark" : "light";
    setCurrTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = currTheme;
  }, [currTheme]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.headerTitle}>Where in the world?</h1>
        <button
          className={styles.themeBtn}
          type="button"
          onClick={handleThemeChange}
          aria-label="Toggle theme"
        >
          <img src={themeIcon} alt="sun and moon icon" title="Theme Button" />
        </button>
      </div>
    </header>
  );
};

export default Header;
