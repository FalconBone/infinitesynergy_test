import { createSlice } from "@reduxjs/toolkit";
import data from '../data/users.json'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        users: data
    },
    reducers: {
        changeUserData(state, action) {
            const newUserData = action.payload.data;
            const id = action.payload.id;

            for (let key in state.users[id]) {
                state.users[id][key] = newUserData[key]
            }
        }
    }
})


export const {changeUserData} = profileSlice.actions;

export default profileSlice.reducer