import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../interfaces/user.interface";
import { loadState } from "./storage";

// const initialState: Profile = {
//     name: '',
//     isLogged: false,
//     favorites: []
// };
const initialState: Profile = {
    name: loadState('user-profile')?.name || '',
    isLogged: loadState('user-profile')?.isLogged || false,
    favorites: loadState('user-profile')?.favorites || []
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
        addUserToFavorites: (state, action) => {
            state.favorites.push(action.payload);
            console.log(state);
            console.log(action);
        },
        removeUserFavorites: (state, action) => {
            state.favorites = state.favorites.filter((item: { id: number }) => item.id !== action.payload.id);
        },
        resetUserFavorites: (state) => {
            state.favorites = []
        }
    }
});

export default userSlice.reducer;
export const { login, logout, addUserToFavorites, removeUserFavorites, resetUserFavorites } = userSlice.actions;