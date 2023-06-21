import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import authHoc from '../HOC/authHoc'
import withRouter from '../HOC/withRouter'
import ProfileContainer from './ProfileContainer'
import { initializeProfileThunk } from '../../redux/appSlice'
import EmptyProfilePageTemplate from './EmptyProfilePageTemplate'
import NotFound from '../common/NotFound'

const ProfilePageRelay = (props, { showMobileVersion }) => {
     const {
          initializeProfileThunk,
          friends,
          friendsCount,
          profile,
          profileDataUpdated,
          profilePageNotFound,
     } = props
     const userIdRouterParam = props.router.params.userId
     const { userId } = profile
     useEffect(() => {
          if (userId !== parseInt(userIdRouterParam) || profileDataUpdated) {
               initializeProfileThunk({
                    userId: userIdRouterParam,
                    friendsArray: friends,
                    friendsCount,
                    profilePageNotFound
               })
          }

     }, [userIdRouterParam])

     if (profilePageNotFound === true) return <NotFound />

     if (!props.profileInitialized) return <EmptyProfilePageTemplate {...{ showMobileVersion }} />

     return (
          <ProfileContainer {...{ userIdRouterParam }} />
     )
}

const mapStateToProps = (state) => {
     return {
          profilePageNotFound: state.profile.profilePageNotFound,
          profileDataUpdated: state.profile.profileDataUpdated,
          friendsCount: state.users.friendsCount,
          profile: state.profile.profile,
          auth: state.auth.isLogged,
          friends: state.users.friends,
          profileInitialized: state.app.profileInitialized,
          showMobileVersion: state.settings.showMobileVersion
     }
}

export default compose(connect(mapStateToProps, { initializeProfileThunk }), authHoc, withRouter)(ProfilePageRelay)


