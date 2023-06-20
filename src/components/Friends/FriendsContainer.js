import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import authHoc from '../HOC/authHoc'
import Friends from './Friends'
import { getFriendsThunk, unfollowFriendThunk } from '../../redux/usersSlice'

const FriendsContainer = ({ nightMode, getFriendsThunk, unfollowFriendThunk, friends, friendsFetch, friendsCount }) => {
     useEffect(() => {
          friends.length === 0 && getFriendsThunk(friendsCount)
     }, [])

     const defaultAvatar = require('../common/default-avatar.jfif')

     const handleUnfollowFriend = (friendId) => {
          unfollowFriendThunk({ friendId })
     }

     return <Friends {...{ nightMode, handleUnfollowFriend, friends, defaultAvatar, friendsFetch }} />
}

const mapStateToProps = (state) => {
     return {
          friendsCount: state.users.friendsCount,
          friends: state.users.friends,
          auth: state.auth.isLogged,
          friendsFetch: state.users.fetchUsers
     }
}

export default compose(connect(mapStateToProps, { getFriendsThunk, unfollowFriendThunk }), authHoc)(FriendsContainer)