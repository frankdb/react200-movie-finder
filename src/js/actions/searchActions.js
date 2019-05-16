import searchReducer from '../reducers/searchReducer';

import MovieSearchContainer from '../containers/MovieSearchContainer';

const axios = require('axios');

export const getMovies = movie => {
  return dispatch => {
    axios.get("https://www.omdbapi.com/?s=" +
      movie +
      "&apikey=8730e0e&type=movie")
      .then(data => data.data.Search)
      .then(movies =>
        Promise.all(movies.map(movie =>
          axios.get("http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=8730e0e")
            .then(response => response.data)
        ))
          .then(data => dispatch({ type: 'GET_MOVIES', payload: data }))
      )
      .catch(err => dispatch({ type: 'GET_MOVIES_FAIL' }))
  }
}

export const getMovie = id => {
  return dispatch => {
    axios.get("https://www.omdbapi.com/?i=" + id + "&apikey=8730e0e")
      .then(data => dispatch({ type: 'GET_MOVIE', payload: data }))
  }
}