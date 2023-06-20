import React from 'react'
import { useSelector } from 'react-redux'
import Users from './Users'
import { nightModeStyles } from '../../common/nightModeStyles'
import Paginator from './Paginator'

const UsersContainer = ({
                             paginatorProps,
                             followUserThunk,
                             unFollowUserThunk,
                             defaultUserAvatar,
                             nightMode,
                        }) => {


     const totalCount = useSelector(state => state.users.totalCount)
     const followUserFetch = useSelector(state => state.users.followUserFetch)
     const users = useSelector(state => state.users.users)

     const handleFollowUser = (userId, isFollowed) => {
          if (isFollowed) {
               unFollowUserThunk({ userId })
          } else {
               followUserThunk({ userId })
          }
     }

     return (
          <div style={nightMode ? nightModeStyles.centerBlock : null} className={'users-container'}>
               <Users {...{
                    nightMode, users, followUserFetch,
                    handleFollowUser, defaultUserAvatar,
                    totalCount
               }} />
               <Paginator {...{ totalCount, paginatorProps }} />
          </div>
     )


}

export default UsersContainer