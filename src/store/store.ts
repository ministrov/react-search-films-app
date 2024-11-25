import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import { saveState } from "./storage";

export const store = configureStore({
    reducer: {
        profile: userSlice,
    }
});

store.subscribe(() => {
    saveState({ name: store.getState().profile.name, favorites: store.getState().profile.favorites }, 'user-profile');
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;