import themeIcon from "../assets/brightness-and-contrast.png";
import styles from "./Header.module.css";

const Header = ({ onThemeUpdate }) => {
  // console.log("HEADER");
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <button type="button">
        <img src={themeIcon} alt="theme-change-icon" onClick={onThemeUpdate} />
      </button>
    </header>
  );
};

export default Header;
