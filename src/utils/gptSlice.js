import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    Gptstatus: false,
    gptResults: null,
    MoviesNames: null,
    isloading: false,
    selectedMovie: null,
    selectedMovieTrailer: null,
  },
  reducers: {
    startLoading: (state) => {
      state.isloading = true;
    },
    gptstatus: (state) => {
      state.Gptstatus = !state.Gptstatus;
    },
    addGptMoviesResult: (state, action) => {
      const { MoviesNames, gptResults } = action.payload;
      state.gptResults = gptResults;
      state.MoviesNames = MoviesNames;
      state.isloading = false;
    },
    addselectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addselectedMovieTrailer:(state,action)=>{
      state.selectedMovieTrailer=action.payload;
    },
    clearSelectedMovies:(state)=>{
      state.selectedMovie=null;
      state.selectedMovieTrailer=null;
    }
  },
});
export const { gptstatus, addGptMoviesResult, startLoading, addselectedMovie, addselectedMovieTrailer,clearSelectedMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
