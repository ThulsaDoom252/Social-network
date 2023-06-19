import { login, loginApi } from '../api/api'
import { setCurrentUserAvatarThunk } from './profile/profileSlice'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
     name: 'auth-slice',
     initialState: {
          id: null,
          email: null,
          login: null,
          isLogged: false,
          captcha: false,
          errorMessage: null,
          isAuthDataFetching: false,
     },
     reducers: {
          setAuthData(state, action) {
               const { id, email, userLogin } = action.payload
               state.id = id
               state.email = email
               state.login = userLogin
          },
          toggleAuthStatus(state, action) {
               state.isLogged = action.payload
          },
          toggleAuthFetch(state, action) {
               state.isAuthDataFetching = action.payload
          },
          toggleCaptcha(state, action) {
               state.captcha = action.payload
          },
          setAuthErrorMessage(state, action) {
               state.errorMessage = action.payload
          }
     }
})

export default authSlice.reducer
export const {
     setAuthData,
     toggleAuthStatus,
     setAuthErrorMessage,
     toggleCaptcha,
     toggleAuthFetch
} = authSlice.actions

export const getAuthDataThunk = createAsyncThunk('login-thunk', async (_, { dispatch }) => {
     await dispatch(toggleAuthFetch(true))
     const response = await login.auth()
     const { id, email, login: userLogin } = response.data
     const { resultCode } = response
     if (resultCode === 0) {
          dispatch(setAuthData({ id, email, userLogin }))
          dispatch(toggleAuthStatus(true))
          dispatch(setCurrentUserAvatarThunk(id))
     } else {
          dispatch(toggleAuthStatus(false))
     }
     dispatch(toggleAuthFetch(false))
})

export const getCaptchaThunk = () => {
     return async (dispatch) => {
          const response = await loginApi.getCaptcha()
          dispatch(toggleCaptcha(response.data.url))
     }
}


export const loginThunk = createAsyncThunk('main-login-thunk', async ({
                                                                           email,
                                                                           password,
                                                                           rememberMe,
                                                                           antiBotSymbols
                                                                      }, { dispatch }) => {
     await dispatch(toggleAuthFetch(true))
     const data = await loginApi.logIn(email, password, rememberMe, antiBotSymbols)
     if (data.resultCode === 0) {
          dispatch(getAuthDataThunk())
          dispatch(errorAC(false))
          dispatch(setAuthErrorMessage(null))
          dispatch(toggleCaptcha(null))
     } else if (data.resultCode === 1) {
          dispatch(setAuthErrorMessage(data.messages[0]))
     } else if (data.resultCode === 10) {
          dispatch(getCaptchaThunk())
          dispatch(setAuthErrorMessage(data.messages[0]))
     }
     dispatch(toggleAuthFetch(false))
})

export const logOutThunk = createAsyncThunk('logout-thunk', async (_, { dispatch }) => {
     const data = await loginApi.logOut()
     data.resultCode === 0 && dispatch(getAuthDataThunk())

})



