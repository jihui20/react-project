const ADD_MOVIE = 'myMovie/ADD_MOVIE';
const REMOVE_MOVIE = 'myMovie/REMOVE_MOVIE';

export const addMovie = (list) => ({ type: ADD_MOVIE, list });
export const removeMovie = (list) => ({ type: REMOVE_MOVIE, list });

const initialState = {
  movie: [],
};

export default function myMovie(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movie: [...state.movie, action.list],
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        movie: action.list,
      };
    default:
      return state;
  }
}
