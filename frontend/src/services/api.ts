import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api';

export default {
    // Get book from google search 
    getSearchGithub: (searchType:string, searchText:string) => axios.post(`${SERVER_URL}/search`, {
        type: searchType,
        query: searchText
    })

}