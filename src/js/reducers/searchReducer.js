const initialState = {
  Title: '',
  Year: '',
  Plot: '',
  Poster: null,
  error: false
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES': {
      return {
        ...state,
        Title: action.payload.data["Title"],
        Year: action.payload.data["Year"],
        Plot: action.payload.data["Plot"],
        Poster: action.payload.data["Poster"]
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

