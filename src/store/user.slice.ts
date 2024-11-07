import { createSlice } from "@reduxjs/toolkit";

const initialState: { name: string, isLogged: boolean } = {
    name: '',
    isLogged: false
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
            state.isLogged = false
        }
    }
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;