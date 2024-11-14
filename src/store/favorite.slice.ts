// import { createSlice } from "@reduxjs/toolkit";
// import { IFilms } from "../interfaces/films.interface";

// export interface FavoriteItems {
//     favoriteFilms: IFilms[]
// }

// const initialState: FavoriteItems = {
//     favoriteFilms: []
// };

// export const favoriteSlice = createSlice({
//     name: 'favorite',
//     initialState,
//     reducers: {
//         addToFavorites: (state, action) => {
//             state.favoriteFilms.push(action.payload);
//         },
//         removeFromFavorites: (state, action) => {
//             state.favoriteFilms.filter((item) => item.id !== action.payload.id);
//         }
//     }
// });

// export default favoriteSlice.reducer;
// export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;