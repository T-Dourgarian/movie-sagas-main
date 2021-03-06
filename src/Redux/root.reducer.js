import { combineReducers } from 'redux';

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        case 'EDIT_MOVIE_DETAILS': // this is for my direct edit from inputs in EditDetails.js. it works just like a handleChangeFor local state would
            return {...state,[action.payload.property]:action.payload.value}
        default:
            return state;
    }
}

const reducers = combineReducers({ movies,movieDetails })

export default reducers;