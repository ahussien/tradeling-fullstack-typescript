import {clearSearch, startSearch} from "../../redux/actions/searchActions";
import { connect } from 'react-redux';
import Search from '../../components/search/Search'

const mapStateToProps = (state:any) => ({
    searchTerm: state.results.searchTerm,
    searchType: state.results.searchType,
    isLoading: state.results.isLoading,
    items: state.results.items,
    status:state.results.status,
    errorMessage: state.results.errorMessage,
  });
 
  const actionCreator = (searchTerm: string,searchType: string) => {
    return (dispatch:any, getState:any) => {
      dispatch(startSearch(searchTerm, searchType, dispatch, getState));
    }
  }

  const mapDispatchToProps = (dispatch:any, getState:any) => {
    return {
      clearSearch: (searchTerm: string,searchType: string) => dispatch(clearSearch(searchTerm, searchType, dispatch)),
      startSearch:(searchTerm: string,searchType: string) => dispatch(actionCreator(searchTerm, searchType)),
    }
  }

  export default connect(mapStateToProps,  mapDispatchToProps)(Search);