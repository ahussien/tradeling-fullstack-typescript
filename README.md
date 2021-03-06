# Tradeling Fullstack Code Challenge Solution
This project is the solutions of the assessment provided by Tradeling.

## Implemented Features
#### Frontend
* There will be two input fields, on search field for the user to type the text and a dropdown where user can either pick "User" or "Repository" to define the entities that they want to search. 
* When the user doesn't have any input or clears the input, the input fields should be shown in the middle of the page.
* When the user starts typing into the input, make an Backend API call to fetch the results and display them in the form of grid below it. 
* The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.
* Add debounce (feel free to import from lodash). 
* Make the API calls only if the user has typed 3 or more characters.
* If the user changes the "Entity type" value in the dropdown and user has 3 or more characters in the input already, it should refresh the results.
* If the user clears the input or types less than three characters, clear the results and show the empty screen.
* The UI for the results could roughly look like below: Grid view implemenetd 
* The design for repository and user cards are up to you: Added some fields and can be customized easily to show more fields.
#### Backend
* API Endpoint "/api/search": 
  Receives a POST request with search type(users or repositories or issues) & search text(mandatory).
The results will be fetched from the GitHub API & cache it for atleast 2 hours.
GitHub Search API Docs
* "/api/clear-cache" : Clear Backend Caching  fix this one

## Tech Stack (MERN)
#### Frontend
* React.js
* react-redux
* TypeScript
* redux-persist
* redux-thunk
* Styling: Vanilla CSS, Styled Components 
#### Backend
* Node.js 
* ExpressJs, REDIS
* axios
* swagger-ui-express
* winston

## Setup
- Clone the repo
-   Install the dependencies in both projects `frontend` and `backend`.
    ```
    Run `npm install`
    ```
- Create a `.env` file within the `backend` folder.
    ```
    REDIS_URL=redis://127.0.0.1:6379/1
    PORT=5000
    CACHE_EXPIRATION_IN_SECONDS=7200
    GITHUB_SEARCH_URL=https://api.github.com/search
    ```
- Create a `.env` file within the `frontend` folder.
    ```
    REACT_APP_SERVER_URL=http://localhost:5000/api
    ```
- Run the command `npm start` in both projects `backend` and `frontend`: 

- Browse to `http://localhost:3000/` to see the start page.

## Swagger documentation
 - You can acccess the Swagger documenattaion 
    ```
     http://localhost:5000/docs/
    ```
## Unit testing
 - Not including because of time constrains
