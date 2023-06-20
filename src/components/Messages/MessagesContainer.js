import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import authHoc from '../HOC/authHoc'
import { getRandomUsersTC } from '../../redux/messagesSlice'
import { nightModeStyles } from '../../common/nightModeStyles'
import Messages from './Messages'

const MessagesContainer = ({ randomUsers, nightMode, login: currentUserName, getRandomUsersTC }) => {
     const [senderId, setSenderId] = useState(0)
     const defaultAvatar = require('../common/default-avatar.jfif')

     useEffect(() => {
          getRandomUsersTC()
     }, [])

     const handleSenderId = (index) => {
          setSenderId(index)
     }

     const userAvatars = randomUsers.map(user => user.photos.small ? user.photos.small : defaultAvatar)
     const userNames = randomUsers.map(user => user.name)

     return <Messages {...{
          senderId,
          nightModeStyles,
          nightMode,
          currentUserName,
          userNames,
          userAvatars,
          randomUsers,
          handleSenderId,
          defaultAvatar
     }} />


}

const mapStateToProps = (state) => {
     return {
          randomUsers: state.messages.randomUsers,
          auth: state.auth.isLogged,
          login: state.auth.login
     }
}

export default compose(connect(mapStateToProps, { getRandomUsersTC }), authHoc)(MessagesContainer)




