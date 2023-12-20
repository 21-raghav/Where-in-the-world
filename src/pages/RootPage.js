import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootPage = ({ onThemeChange }) => {

  // fn passed as prop
  const getUpdatedTheme = () => {
    onThemeChange();
  };
  
  return (
    <>
      <Header onThemeUpdate={getUpdatedTheme} />
      {/* <main> */}
        <Outlet />
      {/* </main> */}
    </>
  );
};

export default RootPage;
