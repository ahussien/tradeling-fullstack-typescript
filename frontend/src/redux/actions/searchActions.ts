import {SEARCH_STARTED, SEARCH_SUCCESS, SEARCH_FAILURE, CLEAR_SEARCH} from "./actionTypes";
import Api from "../../services/api";

/**
* This action will clear the search results and clear the current state
*/
export const clearSearch = (searchTerm: string, searchType: string, dispatch: any) => {
  return {
    type: CLEAR_SEARCH
  };
};

const getCachedResult = (state: any, key: any) => state && state.results ? state.results[key] : undefined;

/**
* This action will start the search, if the search results for the same type and search term
* the action will return the cached version and if not exist will call the api
*/
export const startSearch = (searchTerm: string, searchType: string, dispatch: any, getState: any) => {
  const cacheKey = `${searchType}:${searchTerm}`;
  const state = getState();
  const result = getCachedResult(state, cacheKey);

  if (result) {
  return dispatch({
      type: SEARCH_SUCCESS,
      payload: { cacheKey: cacheKey, items: result },
    });
  } else {
    const request = Api.getSearchGithub(searchType, searchTerm);
    request.then(
      (response) => {
        dispatch({
          type: SEARCH_SUCCESS,
          payload: { cacheKey: cacheKey, items: response.data },
        });
      },
      (err) => {
        return dispatch({
          type: SEARCH_FAILURE,
          payload: { items: [], errorMessage: err },
        });
      }
    );

    return {
      type: SEARCH_STARTED,
      payload: {
        searchTerm,
        searchType,
      },
    };
  }
};
