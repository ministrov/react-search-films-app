import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorites: (_state, _action) => { },
        removeFromFavorites: (_state, _action) => { }
    }
});

export default favoriteSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;