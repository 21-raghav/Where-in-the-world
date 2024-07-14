import FilterList from "./components/Filter/FilterList";
import List from "./components/List/List";
import Pagination from "./components/Pagination/Pagination";

const HomePage = () => {
  // const currPageNum = useSelector(state => state.currPageNum);

  console.log("Homepage rendered");

  // const itemsPerPage = 12;

  // const dispatch = useDispatch();

  // list item to start displaying list from depending on the page number
  //  const indexStart = currPageNum * itemsPerPage - itemsPerPage;

  //  listToDisplay = listToDisplay.slice(
  //    indexStart,
  //    indexStart + itemsPerPage
  //  );

  return (
    <>
      <FilterList />
      <List />
      <Pagination />
    </>
  );
};
export default HomePage;
