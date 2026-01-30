import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesslice";
import gptSlice from './gptSlice'
import langSlice from './langconfig'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt:gptSlice,
    lang:langSlice,
   
  },
});
export default appStore;
