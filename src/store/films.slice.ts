import { createSlice } from "@reduxjs/toolkit";
// import { FilmsDescription } from "../interfaces/films-description.interface";

// // export interface FilmsState {
// //     length: number;
// //     films: FilmsDescription[]
// // }

export const initialState: any = {
    films: []
};

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addFilms: (state, action) => {
            state.films.push(...action.payload);
        }
    }
});

export const { addFilms } = filmsSlice.actions;
export default filmsSlice.reducer;