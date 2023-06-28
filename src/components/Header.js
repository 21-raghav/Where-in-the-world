import Card from "./UI/Card";

import themeIcon from "../assets/brightness-and-contrast.png";
import styles from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={styles.header}>
      <Card className={styles.parent}>
        <h1>Where in the world?</h1>
        <button type="button">
            <img src={themeIcon} alt="theme-change-icon" onClick={props.onConfirm}/>
        </button>
      </Card>
    </header>
  );
};

export default Header;
