import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState } from "react";
import ThemeContext from "./Theme-Context";

import RootPage from "./pages/Root";
import HomePage, { loader as listLoader } from "./pages/Home";
import DetailPage, { loader as detailLoader } from "./pages/Detail";

import styles from "./App.module.css";

function App() {
  const currTheme = useContext(ThemeContext);
  const [newTheme, setNewTheme] = useState(currTheme);
  
  const getNewTheme = (data) => {
    setNewTheme(data);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage onGetTheme={getNewTheme} />,
      children: [
        { index: true, element: <HomePage />, loader: listLoader },
        { path: ":detail", element: <DetailPage />, loader: detailLoader },
      ],
    },
  ]);

  return (
    <>
      <ThemeContext.Provider value={newTheme}>
        <div className={`${styles.wrapper} ${styles[newTheme.theme]}`}>
          <RouterProvider router={router} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
