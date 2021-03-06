import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";

function* rootSaga() {
    yield takeEvery('GET_MOVIES',getMoviesSaga);
    yield takeEvery('GET_MOVIE_DETAILS',getMovieDetails);
    yield takeEvery('SET_MOVIE_DETAIL_EDITS',setMovieDetailEdits);
}

function* setMovieDetailEdits(action) { // put request to edit movie details in db 
    yield axios.put(`/movies/edit/${action.payload.id}`,{title:action.payload.title,description:action.payload.description});
    yield put({type:"GET_MOVIE_DETAILS",payload:action.payload.id});
}

function* getMovieDetails(action) {
    
    const movie = yield axios.post(`/movies/details/${action.payload}`); // gets all the details from selected movie
    yield put({type:'SET_MOVIE_DETAILS',payload:movie.data[0]}); // sends back single object with all data 
}

function* getMoviesSaga() { // gets all movies
    const movies = yield axios.get("/movies");
    yield put({type:"SET_MOVIES",payload:movies.data});
}


export default rootSaga;