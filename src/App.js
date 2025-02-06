import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Provider } from "react-redux";

import RootPage from "./pages/RootPage";
import HomePage, { fetchCountries } from "./pages/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";

import store from "./store/store";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage />, loader: fetchCountries },
      { path: ":detail", element: <DetailPage /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <RouterProvider router={router}>
          <ScrollRestoration />
        </RouterProvider>
      </Provider>
    </div>
  );
};

export default App;
