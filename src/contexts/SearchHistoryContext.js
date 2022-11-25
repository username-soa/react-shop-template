import React, { createContext, useState, useEffect } from "react";

const SearchHistoryContext = createContext({});

export const SearchHistoryProvider = ({ children }) => {
  let isMounted = true;
  const [searchTerms, setSearchTerms] = useState([]);

  //chck for max items
  const checkForMaxTerms = (arr) => {
    if (arr.length <= 6) {
      return arr;
    }
    arr.pop();
    return arr;
  };

  //check if item already exists
  const checkForItem = (term, arr) => {
    let newArr = [];
    if (
      arr?.some((i) => {
        return term === i;
      })
    ) {
      newArr = arr.filter((i) => {
        return i !== term;
      });
      newArr.unshift(term);
      const finalArr = checkForMaxTerms(newArr);
      console.log("updated search term arr is : ", finalArr);
      localStorage.setItem("ec_search_history", JSON.stringify(finalArr));
      //update state
      setSearchTerms(finalArr);
      return finalArr;
    } else {
      arr.unshift(term);
      newArr = checkForMaxTerms(arr);
      console.log("updated search term arr is : ", newArr);
      localStorage.setItem("ec_search_history", JSON.stringify(newArr));
      //update state
      setSearchTerms(newArr);
      return newArr;
    }
  };

  //get search results from local storage
  const getFromLocalStorage = () => {
    if (localStorage.getItem("ec_search_history") === null) {
      //do some
      localStorage.setItem("ec_search_history", JSON.stringify([]));
    } else {
      //first time need to create one
      try {
        const searchHistoryArr = JSON.parse(
          localStorage.getItem("ec_search_history")
        );
        const newArr = checkForMaxTerms(searchHistoryArr);
        setSearchTerms(newArr);
        console.log("searchHistoryArr is : ", newArr);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const saveSearchTermsToBrowser = (term) => {
    //save to local storage
    try {
      const searchHistoryArr = JSON.parse(
        localStorage.getItem("ec_search_history")
      );
      checkForItem(term, searchHistoryArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeSearchTerm = (term) => {
    try {
      const searchHistoryArr = JSON.parse(
        localStorage.getItem("ec_search_history")
      );
      const newArr = searchHistoryArr.filter((item) => {
        return item !== term;
      });
      localStorage.setItem("ec_search_history", JSON.stringify(newArr));
      //update state
      setSearchTerms(newArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (isMounted) {
      //do some
      getFromLocalStorage();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const searchHistoryContext = {
    searchTerms,
    setSearchTerms,
    removeSearchTerm,
    saveSearchTermsToBrowser,
  };

  return (
    <SearchHistoryContext.Provider value={searchHistoryContext}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

export const SearchConsumer = SearchHistoryContext.Consumer;

export default SearchHistoryContext;
