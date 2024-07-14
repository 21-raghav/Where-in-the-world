import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./pages/Root/RootPage";
import HomePage from "./pages/Home/HomePage";
import DetailPage from "./pages/Detail/Detail";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":detail", element: <DetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
