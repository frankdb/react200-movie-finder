import MovieSearchContainer from '../containers/MovieSearchContainer';

const axios = require('axios');

export const getMovies = movie => {
  return dispatch => {
    axios.get("http://www.omdbapi.com/?s=" +
      movie +
      "&apikey=8730e0e")
      .then(data => dispatch({ type: 'GET_MOVIES', payload: data }))
      .catch(err => dispatch({ type: 'GET_MOVIES_FAIL' }))
  }
}

// trying to get plot
// .then(data =>
//   data.map(movie =>
//     axios.get("http://www.omdbapi.com/?t=" +
//       movie["Title"] +
//       "&apikey=8730e0e")
//   )
// )
// .then(movie => dispatch({ type: 'GET_MOVIES', payload: movie }))

// copy of working original
// export const getMovies = movie => {
//   return dispatch => {
//     axios.get("http://www.omdbapi.com/?s=" +
//       movie +
//       "&apikey=8730e0e")
//       .then(data => dispatch({ type: 'GET_MOVIES', payload: data }))
//       .catch(err => dispatch({ type: 'GET_MOVIES_FAIL' }))
//   }
// }