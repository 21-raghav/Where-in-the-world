import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootPage = ({ onThemeChange }) => {

  // fn passed as prop
  const getUpdatedTheme = () => {
    onThemeChange();
  };
  // console.log("ROOT PAGE");
  return (
    <>
      <Header onThemeUpdate={getUpdatedTheme} />
      <Outlet />
    </>
  );
};

export default RootPage;
