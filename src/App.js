// <<<<<<< .merge_file_hTnoK3
// import { useState } from "react";

// import Header from "./components/Header";
// import Main from "./components/Main";

// import "./App.css";

// function App() {
//   const [theme, setTheme] = useState("");

//   const themeChangeHandler = () => {
//     theme === "dark" ? setTheme("") : setTheme("dark");
//   };

//   return (
//     <div className={`wrapper ${theme}`}>
//       <Header onConfirm={themeChangeHandler} />
//       <Main />
//     </div>
// =======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import RootPage from "./pages/RootPage";
import HomePage from "./pages/Home";
import DetailPage, { loader as detailLoader } from "./pages/Detail";

import "./App.css";

function App() {
  // const currTheme = useContext(ThemeContext);
  // const [newTheme, setNewTheme] = useState(currTheme);
  
  // const getNewTheme = (data) => {
  //   setNewTheme(data);
  // };

  const [theme, setTheme] = useState("");

  const themeChangeHandler = () => {
    theme === "" ? setTheme("dark") : setTheme("");
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage onThemeChange={themeChangeHandler} />,
      children: [
        { index: true, element: <HomePage /> },
        { path: ":detail", element: <DetailPage />, loader: detailLoader },
      ],
    },
  ]);
  console.log("run from app");
  return (
    <>
      {/* <ThemeContext.Provider value={newTheme}> */}
        <div className="wrapper">
          <RouterProvider router={router} />
        </div>
      {/* </ThemeContext.Provider> */}
    </>
// >>>>>>> .merge_file_jGKlzW
  );
}

export default App;
