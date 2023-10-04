import { useLoaderData } from "react-router-dom";

import List from "../components/List";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <>
      <List list={data} />
    </>
  );
};

export default HomePage;

export async function loader() {
  const data = await fetch("countries.json");
  // try catch to check for error
  const result = await data.json();
  return result;
}
