import React, { useState } from 'react'
import { compose } from 'redux'
import { connect, useSelector } from 'react-redux'
import authHoc from '../HOC/authHoc'
import { useEffect } from 'react'
import UsersTemplate from './UsersTemplate'
import UsersContainer from './UsersContainer'
import { followUserThunk, getUsersThunk, unFollowUserThunk } from '../../redux/usersSlice'
import defaultAvatar from '../common/default-avatar.jfif'
import Paginator from './Paginator'
import { nightModeStyles } from '../../common/nightModeStyles'

const UsersRelay = ({ getUsersThunk, followUserThunk, unFollowUserThunk }) => {
     const currentPage = useSelector(state => state.users.currentPage)
     const pageSize = useSelector(state => state.users.pageSize)
     const fetchUsers = useSelector(state => state.users.fetchUsers)
     const usersPerPage = useSelector(state => state.users.usersPerPage)
     const nightMode = useSelector(state => state.app.nightMode)
     const [emptyUsers] = useState(Array.from({ length: usersPerPage }, (_, index) => index + 1))
     const totalCount = useSelector(state => state.users.totalCount)

     const defaultUserAvatar = defaultAvatar
     const handlePageChange = (currentPage) => getUsersThunk({ currentPage, usersPerPage })
     const paginatorProps = [currentPage, pageSize, handlePageChange]


     useEffect(() => {
          getUsersThunk({ currentPage, usersPerPage })
     }, [])

     if (fetchUsers) {
          return (
               <div style={nightMode ? nightModeStyles.centerBlock : null} className={'users-container'}>
                    <UsersTemplate {...{ emptyUsers, nightMode, defaultUserAvatar }} />
                    <Paginator isDisabled={true} {...{ totalCount, paginatorProps }} />
               </div>
          )
     }

     return <UsersContainer {...{
          paginatorProps,
          followUserThunk,
          unFollowUserThunk,
          nightMode,
          defaultUserAvatar
     }} />
}

const mapStateToProps = (state) => {
     return {
          auth: state.auth.isLogged
     }
}

export default compose(connect(mapStateToProps, {
     getUsersThunk,
     followUserThunk,
     unFollowUserThunk
}), authHoc)(UsersRelay)