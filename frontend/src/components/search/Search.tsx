import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";

import SearchBox from "./SearchBox";
import RepoCardList from "../repositories/RepoCardList";
import UserCardList from "../users/UserCardList";
import styles from "../../styles.module.css";

const Search = (props: any) => {
  const [searchType, setSearchType] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  /**
   * This is flag to center the search box
   */
  const isShownMiddle =
    !searchText || searchText.length < 3 || searchText === "";

  /**
   * debounce the search action until the user complete entering the search term
   * a change in the input
   * @param {*} { target: { value } }
   */
  const debouncedSearch = useRef( _.debounce((searchType: string, searchText: string) => search(searchType, searchText),1000)).current;

  /**
   * This will be called every time there is
   * a change in the status of the search
   * @param {*} { status }
   */
  const Status = ({ status }: any) => {
    if (status === "") {return <div></div>;}
    if (status === "loading") {return <div className={styles.loadingText}>Loading ...</div>;}
    if (status === "error") {return <div className={styles.errorText}>Something went wrong ...</div>;}

    return null;
  };

  /**
   * This will be called to reset the search page
   */
  const resetSearchPage = () => props.clearSearch(searchText, searchType);

  /**
   * This will be called every time the user type in the search box
   * a change in the input
   * @param {*} {searchType: string, searchText: string}
   */
  const onSearchChange = (searchType: string, searchText: string) => {
    setSearchType(searchType);
    setSearchText(searchText);
    resetSearchPage();

    if (searchText && searchText.length >= 3) {
      debouncedSearch(searchType, searchText);
    }
  };

  /**
   * Dispatch the search start 
   * @param {*} value
   */
  const search = async (searchType: string, searchText: string) => {
    props.startSearch(searchText, searchType);
  };


  return (
    <div className={isShownMiddle ? styles.containercentred : styles.container}>
      <SearchBox
        placeholder="Enter Repository Name"
        buttonText="Search"
        onSearchChange={onSearchChange}
      />
      <Status status={props.status} />
      {searchType === "repositories" ? (
        <RepoCardList cardList={props.items} />
      ) : (
        <UserCardList cardList={props.items} />
      )}
    </div>
  );
};

export default Search;
