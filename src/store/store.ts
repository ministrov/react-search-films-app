import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import { saveState } from "./storage";

export const store = configureStore({
    reducer: {
        profile: userSlice,
    }
});

store.subscribe(() => {
    const state = store.getState().profile;
    saveState('user-profile', JSON.stringify(state));
});

console.log(store.getState().profile.favorites);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;