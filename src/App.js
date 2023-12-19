import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("");

  const themeChangeHandler = () => {
    theme === "dark" ? setTheme("") : setTheme("dark");
  };

  return (
    <div className={`wrapper ${theme}`}>
      <Header onConfirm={themeChangeHandler} />
      <Main />
    </div>
  );
}

export default App;
