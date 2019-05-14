const initialState = {
  movies: [],
  error: false
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES': {
      return {
        ...state,
        movies: action.payload.data.Search
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

