import { configureStore } from '@reduxjs/toolkit';
import userListReducer from '../features/users/userSlice';
import loggedUserReducer from '../features/users/loggedUserSlice';
import stationListReducer from '../features/stations/stationSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userList', 'loggedUser', 'stationList']
}

const rootReducer = combineReducers({
  userList: userListReducer,
  loggedUser: loggedUserReducer,
  stationList: stationListReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

  reducer: {
    Store: persistedReducer,
  },
  middleware: [thunk]

});