import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import myMovie from './myMovie';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  myMovie,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
