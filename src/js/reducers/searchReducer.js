const initialState = {
  movies: [],
  movie: [],
  error: false
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES': {
      return {
        ...state,
        movies: action.payload
      }
    }

    case 'GET_MOVIE': {
      return {
        ...state,
        movie: action.payload
      }
    }

    case 'GET_MOVIES_FAIL': {
      return {
        ...state,
        error: true
      }
    }

    default: {
      return state;
    }
  }
}

