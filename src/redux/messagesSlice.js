import {apiCaller} from "../api/api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

//STATE
const messagesSlice = createSlice({
    name: 'dialogs-slice',
    initialState: {
        randomUsers: [],
    },
    reducers: {
        setRandomUsersAC(state, action) {
            state.randomUsers = [...action.payload]
        },
    }
})

export default messagesSlice.reducer
export const {setRandomUsersAC} = messagesSlice.actions


export const getRandomUsersTC = createAsyncThunk(
    'getRandomUsers-thunk', async (_, {dispatch}) => {
        const randomPage = Math.floor(Math.random() * 4000)
        const data = await apiCaller.getRandomUsers(randomPage, 5)
        dispatch(setRandomUsersAC(data.items))
    }
)

