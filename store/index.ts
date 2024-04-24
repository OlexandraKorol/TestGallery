import { galleryReducer } from '../src/redusers/photos';
import { combineReducers, configureStore } from "@reduxjs/toolkit"

const rootReduser = combineReducers({
  photos: galleryReducer
})

export const store = configureStore({ reducer: rootReduser })