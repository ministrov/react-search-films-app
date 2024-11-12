import { createSlice } from "@reduxjs/toolkit";
import { films } from "../const/const";
import { IFilms } from "../interfaces/films.interface";

export const initialState: IFilms[] = films;

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        getFilm: (state, action) => {
            state.find((film) => film.id === action.payload);
        },
        searchFilm: (state, action) => {
            state.filter((film) => film.title === action.payload);
        }
    }
});

export default filmsSlice.reducer;
export const { getFilm, searchFilm } = filmsSlice.actions;