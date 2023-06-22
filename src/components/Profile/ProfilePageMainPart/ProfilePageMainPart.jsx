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
          <div style={nightMode ? nightModeStyles.centerBlock : null} className={'profile-center-part-block'}>
               <div className={'profile-bg'}>
                    <NavLink to={'/edit'} hidden={directEditMode} className={'profile-edit-btn'}>Edit
                         Profile</NavLink>
               </div>
               <div className={'profile-user-data-container'}>
                    <ProfileAvatarBlock {...{
                         isCurrentUser, directEditMode, defaultAvatar, profileAvatarProps, statusProps
                    }} />
                    <ProfileUserData {...{ isCurrentUser, profileDataProps }} />
               </div>
               {isCurrentUser && <div className={'profile-mobile-block'}>
                    <div style={{ 'display': showMobileVersion && 'block' }} className={'mobile-friends-block'}>
                         <p>Friends({friends.length})</p>
                         <div className={'profile-mobile-friends-list'}>
                              {friends.map((friend, index) => index < 6 &&
                                   <NavLink to={`/profile/ ${friend.id}`} key={index}>
                                        <div className={'profile-mobile-friend-block'}>
                                             <img
                                                  src={friend.photos.small ? friend.photos.small : defaultAvatar}
                                                  alt={`photo${index}`} /><p>{friend.name}</p></div>
                                   </NavLink>
                              )}
                         </div>
                         <NavLink to={'/friends'} className={'profile-mobile-friends-link'}>...</NavLink>
                    </div>
                    <div style={{ 'display': showMobileVersion && 'block' }} className={'profile-mobile-gallery-block'}>
                         <div>Photos({userPhotos.length})</div>
                         <div className={'profile-mobile-photos-list'}>
                              {userPhotos.map((photo, index) => <div className={'profile-mobile-gallery-item'}
                                                                     key={index}>{index < 9 &&
                                   <img
                                        className={'profile-mobile-gallery-photo'}
                                        onClick={() => toggleOverlay({
                                             toggleRelay: true,
                                             toggleViewPort: true,
                                             index
                                        })}
                                        src={require(`../../../redux/profile/${photo}`)}
                                        alt={`photo${index}`} />}</div>)}
                         </div>
                         <NavLink to={'/gallery'} className={'profile-mobile-gallery-link'}>To gallery</NavLink>
                    </div>
               </div>}
               <ProfileWall {...{ fullName, largePhoto, defaultAvatar }} />
          </div>

     )
}

export default ProfilePageMainPart