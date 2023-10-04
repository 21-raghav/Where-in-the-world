import { useLoaderData } from "react-router-dom";

import DetailedListItem from "../components/DetailedListItem";

const DetailPage = () => {
  const data = useLoaderData();
  return <DetailedListItem data={data} />;
};

export default DetailPage;

export async function loader({ params }) {
  const data = await fetch("countries.json");
  // try catch to check for error
  const result = await data.json();
  const res = result.find((item) => item.alpha3Code === params.detail);
  return res;
}
