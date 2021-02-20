import {SEARCH_STARTED, SEARCH_SUCCESS, SEARCH_FAILURE, CLEAR_SEARCH } from '../actions/actionTypes';
  
const initialState = {
    searchTerm: '',
    searchType: '',
    isLoading: false,
    status:'',
    errorMessage: null,
    items: []
}
  
export default function (state = initialState, action:{ type: any; payload: any; }) {
    const {type, payload} = action;
    switch (type) {
      case SEARCH_STARTED:
        return {
          ...state,
            isLoading: true,
            status:'loading',
            items: []
        };
      case SEARCH_SUCCESS:
        if (payload.cacheKey in state) {
          return {
            ...state,
            items:payload.items,
            status:'',
            isLoading: false
          };
  
        } else {
          return {
            ...state,
            items:payload.items,
            status:'',
            isLoading: false,
            [payload.cacheKey]:payload.items
          };
        }
      case SEARCH_FAILURE:
          return {
            ...state,
              isLoading: true,
              status:'error',
          };
      case CLEAR_SEARCH:
          return {
              ...state,
              items: [],
              status:''
            };
      default:
        return state;
    }
  }