import { createSlice } from "@reduxjs/toolkit";

export const initialState: any = {
    films: []
};

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addFilms: (state, action) => {
            state.films.push(action.payload);
        }
    }
});

export default filmsSlice.reducer;
export const { addFilms } = filmsSlice.actions;