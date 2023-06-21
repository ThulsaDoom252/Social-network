import React from 'react'
import NotFound from '../../common/NotFound'
import ProfileUserData from './ProfileUserData'
import ProfileAvatarBlock from './ProfileAvatarBlock'
import ProfileWall from './Wall/ProfileWall'
import { NavLink } from 'react-router-dom'
import { nightModeStyles } from '../../../common/nightModeStyles'

const ProfilePageMainPart = ({
                                  fullName,
                                  isCurrentUser,
                                  notFound,
                                  directEditMode,
                                  defaultAvatar,
                                  userPhotos,
                                  toggleOverlay,
                                  friends,
                                  nightMode,
                                  showMobileVersion,
                                  profileAvatarProps,
                                  statusProps,
                                  profileDataProps,
                                  largePhoto
                             }) => {

     if (notFound) {
          return <NotFound />
     }

     return (
          <div style={nightMode ? nightModeStyles.centerBlock : null} className={'center-part-block'}>
               <div className={'center-bg'}>
                    <NavLink to={'/edit'} hidden={directEditMode} className={'center-edit-btn'}>Edit
                         Profile</NavLink>
               </div>
               <div className={'center-user-info-block'}>
                    <ProfileAvatarBlock {...{
                         isCurrentUser, directEditMode, defaultAvatar, profileAvatarProps, statusProps
                    }} />
                    <ProfileUserData {...{ isCurrentUser, profileDataProps }} />
               </div>
               {isCurrentUser &&
                    <div style={{ 'display': showMobileVersion && 'block' }} className={'mobile-friends-block'}>
                         <div className={'center-friends-block'}>
                              {friends.map((friend, index) => index < 4 &&
                                   <NavLink to={`/profile/ ${friend.id}`} key={index}>
                                        <div className={'center-friend-block'}><img
                                             src={friend.photos.small ? friend.photos.small : defaultAvatar}
                                             alt={`photo${index}`} /><p>{friend.name}</p></div>
                                   </NavLink>
                              )}
                         </div>
                         <NavLink to={'/friends'} className={'center-friends-button'}>...</NavLink>
                    </div>}
               {isCurrentUser &&
                    <div style={{ 'display': showMobileVersion && 'block' }} className={'profile-mobile-gallery-block'}>
                         <div className={'photos-block'}>
                              {userPhotos.map((photo, index) => <div className={'profile-mobile-photo-block'}
                                                                     key={index}>{index < 4 &&
                                   <img className={'center-gallery-photo'}
                                        onClick={() => toggleOverlay({
                                             toggleRelay: true,
                                             toggleViewPort: true,
                                             index
                                        })}
                                        src={require(`../../../redux/profile/${photo}`)}
                                        alt={`photo${index}`} />}</div>)}
                         </div>
                         <NavLink to={'/gallery'} className={'center-gallery-button'}>To gallery</NavLink>
                    </div>}
               <ProfileWall {...{ fullName, largePhoto, defaultAvatar }} />
          </div>

     )
}

export default ProfilePageMainPart