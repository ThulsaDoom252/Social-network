import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import profileSlice from './profile/profileSlice'
import usersSlice from './usersSlice'
import messagesSlice from './messagesSlice'

const reducer = combineReducers({
     auth: authSlice,
     profile: profileSlice,
     messages: messagesSlice,
     users: usersSlice

})

export const store = configureStore({ reducer })
