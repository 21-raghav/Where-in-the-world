import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootPage = () => {
  return (
    <>
      <Header />
      <main style={{maxWidth: "1200px", margin: "0 auto"}}>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
