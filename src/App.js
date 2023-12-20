import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import RootPage from "./pages/RootPage";
import HomePage from "./pages/Home";
import DetailPage, { loader as detailLoader } from "./pages/Detail";

import "./App.css";

function App() {
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
  return (
    <div className={`wrapper ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
