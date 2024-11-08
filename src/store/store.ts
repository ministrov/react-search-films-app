import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import favoriteSlice from "./favorite.slice";

export const store = configureStore({
    reducer: {
        profile: userSlice,
        favorite: favoriteSlice
    }
});

// console.log(store.getState());
store.subscribe(() => {
    const state = store.getState().profile;
    localStorage.setItem('user-profile', JSON.stringify(state));
});

console.log(store.getState().favorite);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;