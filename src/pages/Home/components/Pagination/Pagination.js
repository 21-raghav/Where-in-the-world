import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Pagination.module.css";

const Pagination = () => {
  const countriesList = useSelector((state) => state.filteredList);
  const currentPageNum = useSelector((state) => state.currPageNum);

  const dispatch = useDispatch();

  console.log("Pagination");

  // calculate number of pages and put them in an array
  const numOfPages = [];
  let indexedList;
  const itemsPerPage = 12;

  if (countriesList !== undefined && countriesList.length > 0) {
    for (let i = 1; i <= Math.ceil(countriesList.length / itemsPerPage); i++) {
      numOfPages.push(i);
    }
 
    // list item to start displaying from depending on the page number
    const indexStart = currentPageNum * itemsPerPage - itemsPerPage;

    indexedList = countriesList.slice(indexStart, indexStart + itemsPerPage);
  }

  const clickHandler = (pageNum) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch({ type: "pageNum", pgNum: pageNum });
  };

  useEffect(() => {
    if (indexedList !== undefined)
      dispatch({ type: "renderList", rList: indexedList });
  }, [dispatch, indexedList]);

  return (
    <div className={styles.pagination}>
      {numOfPages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={pageNumber === currentPageNum ? `${styles.btn} ${styles["active-btn"]}` : styles.btn}
          onClick={() => clickHandler(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
