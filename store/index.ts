import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photoItemReducer from './photo';

const rootReducer = combineReducers({
  photo: photoItemReducer,
})

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;