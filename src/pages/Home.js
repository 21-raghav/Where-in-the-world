// import { useLoaderData } from "react-router-dom";

// import List from "../components/List";
import Main from "../components/Main";

const HomePage = () => {
  console.log("run from home");
  return (
      // <List list={data} />
      <Main />
  );
};
export default HomePage;

// export async function loader() {
//   const data = await fetch("countries.json");
//   // try catch to check for error
//   const result = await data.json();
//   return result;
// }
