import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoList from './todoList';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  todoList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
