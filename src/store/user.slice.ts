import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../interfaces/user.interface";

const initialState: Profile = {
    name: '',
    isLogged: false,
    favorites: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name += action.payload;
            state.isLogged = true;
        },

        logout: (state) => {
            state.name = '';
            state.isLogged = false;
        },
        addUserFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeUserFavorites: (state, action) => {
            state.favorites.filter((item) => item.id !== action.payload.id);
        },
        resetUserFavorites: (state) => {
            state.favorites = []
        }
    }
});

export default userSlice.reducer;
export const { login, logout, addUserFavorites, removeUserFavorites, resetUserFavorites } = userSlice.actions;