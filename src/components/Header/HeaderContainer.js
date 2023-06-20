import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { setCurrentUserAvatarThunk } from '../../redux/profile/profileSlice'
import { logOutThunk } from '../../redux/authSlice'

const HeaderContainer = ({ dispatch }) => {
     const isLogged = useSelector(state => state.auth.isLogged)
     const userName = useSelector(state => state.auth.login)
     const nightMode = useSelector(state => state.settings.nightMode)
     const userId = useSelector(state => state.auth.id)
     const currentUserAvatar = useSelector(state => state.profile.currentUserAvatar)
     // useEffect(() => {
     //      dispatch(setCurrentUserAvatarThunk(`${userId}`))
     // }, [])

     const handleLogOut = async () => {
          dispatch(logOutThunk())
     }

     return (
          <Header {...{ isLogged, userName, nightMode, userId, currentUserAvatar, handleLogOut }} />
     )
}

export default HeaderContainer