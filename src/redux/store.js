import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import profileSlice from './profile/profileSlice'

const reducer = combineReducers({
     auth: authSlice,
     profile: profileSlice

})

export const store = configureStore({ reducer })
