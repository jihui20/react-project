const ADD_LIST = 'todoList/ADD_LIST';
const DELETE_LIST = 'todoList/DELETE_LIST';

export const addList = (list) => ({ type: ADD_LIST, list });
export const deleteList = (list) => ({ type: DELETE_LIST, list });

const initialState = {
  todo: [],
};

export default function todoList(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        todo: [...state.todo, action.list],
      };
    case DELETE_LIST:
      return {
        ...state,
        todo: action.list,
      };
    default:
      return state;
  }
}
