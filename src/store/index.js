import { createStore } from "redux";

const initialState = {
  countryList: [],
  currContinent: "Asia",
  filteredList: [],
  currPageNum: 1,
  renderList: [],
  scrollPos: 0,
};

const reducerFn = (state = initialState, action) => {
  if (action.type === "countriesList") {
    return {
      countryList: action.value,
      currContinent: state.currContinent,
      currPageNum: state.currPageNum,
      filteredList: state.filteredList,
      renderList: state.renderList,
      scrollPos: state.scrollPos,
    };
  }
  else if (action.type === "continent") {
    return {
      countryList: state.countryList,
      currContinent: action.continent,
      currPageNum: state.currPageNum,
      filteredList: state.filteredList,
      renderList: state.renderList,
      scrollPos: state.scrollPos,
    };
  }
  else if (action.type === 'filterList') {
    return {
        countryList: state.countryList,
        currContinent: state.currContinent,
        currPageNum: state.currPageNum,
        filteredList: action.fList,
        renderList: state.renderList,
        scrollPos: state.scrollPos,
    };
  }
  else if (action.type === 'renderList') {
    return {
        countryList: state.countryList,
        currContinent: state.currContinent,
        currPageNum: state.currPageNum,
        filteredList: state.filteredList,
        renderList: action.rList,
        scrollPos: state.scrollPos,
      };
  }
  else if (action.type === 'pageNum') {
    return {
        countryList: state.countryList,
        currContinent: state.currContinent,
        currPageNum: action.pgNum,
        filteredList: state.filteredList,
        renderList: state.renderList,
        scrollPos: state.scrollPos,
      };
  }
  else if (action.type === 'scrollPos') {
    return {
      countryList: state.countryList,
      currContinent: state.currContinent,
      currPageNum: state.currPageNum,
      filteredList: state.filteredList,
      renderList: state.renderList,
      scrollPos: action.scrollValue,
    }
  } 
  return {
    countryList: state.countryList,
    currContinent: state.currContinent,
    currPageNum: state.currPageNum,
    filteredList: state.filteredList,
    renderList: state.renderList,
    scrollPos: state.scrollPos,
  };
};

const store = createStore(reducerFn);

export default store;
