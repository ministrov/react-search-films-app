import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../context/user-profile.context";

const initialState: { user: { name: string, isLogged: false } } = {
    user: {
        name: '',
        isLogged: false
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;