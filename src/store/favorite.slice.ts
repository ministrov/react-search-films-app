import { createSlice } from "@reduxjs/toolkit";
import { IFilms } from "../interfaces/films.interface";

export interface FavoriteItems {
    favoriteFilms: IFilms[]
}

const initialState: FavoriteItems = {
    favoriteFilms: []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorites: (_state, _action) => {

        },
        clearFavorites: (state) => {
            state.favoriteFilms = [];
        },
        removeFromFavorites: (_state, _action) => { }
    }
});

export default favoriteSlice.reducer;
export const { addToFavorites, clearFavorites, removeFromFavorites } = favoriteSlice.actions;