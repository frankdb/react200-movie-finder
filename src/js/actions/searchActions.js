const axios = require('axios');

export const getMovies = movie => {
  return dispatch => {
    axios.get("http://www.omdbapi.com/?s=" +
      movie +
      "&apikey=8730e0e")
      .then(data => dispatch({ type: 'GET_MOVIES', payload: data }))
      .catch(err => dispatch({ type: "GET_MOVIES_FAIL" }))
  }
}