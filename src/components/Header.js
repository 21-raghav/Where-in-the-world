import { useContext } from "react";
import ThemeContext from "../Theme-Context";

import Card from "./UI/Card";

import sun from "../assets/sun.svg";
import moon from "../assets/moon.png";
import styles from "./Header.module.css";

const Header = ({onThemeUpdate}) => {
  let { theme, themeIcon } = useContext(ThemeContext);

  const themeChangeHandler = () => {
    if(theme === '') {
      const updatedTheme = {
        theme: 'dark',
        themeIcon: 'moon',
      }
      onThemeUpdate(updatedTheme);
    } 
    else if(theme === 'dark') {
      const updatedTheme = {
        theme: '',
        themeIcon: 'sun',
      }
      onThemeUpdate(updatedTheme);
    }
  };

  return (
    <header className={`${styles.header}`}>
      <Card className={styles.parent}>
        <h1>Where in the world?</h1>
        <button type="button">
          <img
            src={themeIcon === "sun" ? sun : moon}
            alt="theme-change-icon"
            onClick={themeChangeHandler}
          />
        </button>
      </Card>
    </header>
  );
};

export default Header;
