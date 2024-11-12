import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import filmsSlice from "./films.slice";
import favoriteSlice from "./favorite.slice";

export const store = configureStore({
    reducer: {
        movies: filmsSlice,
        profile: userSlice,
        favorite: favoriteSlice
    }
});

store.subscribe(() => {
    const state = store.getState().profile;
    localStorage.setItem('user-profile', JSON.stringify(state));
});

console.log(store.getState().favorite);
console.log(store.getState().movies);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;