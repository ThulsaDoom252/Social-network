import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import profileSlice from './profile/profileSlice'
import usersSlice from './usersSlice'
import messagesSlice from './messagesSlice'
import appSlice from './appSlice'
import settingsSlice from './settingsSlice'

const reducer = combineReducers({
     auth: authSlice,
     profile: profileSlice,
     messages: messagesSlice,
     users: usersSlice,
     app: appSlice,
     settings: settingsSlice
})

export const store = configureStore({ reducer })
