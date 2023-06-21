import React from 'react'
import { truncateUserData } from '../../common/commonFuncs'
import { NavLink } from 'react-router-dom'

const Users = ({
                    users,
                    followUserFetch,
                    handleFollowUser,
                    defaultUserAvatar,
                    totalCount
               }) => {
     return (
          <>
               <div className={'users-page-title'}>USERS: {totalCount}</div>
               <div className='users-list-grid'>
                    {users.map(user =>
                         <div className='user-block' key={user.id}>
                              <NavLink to={`/profile/${user.id}`}>
                                   <div className={'user-avatar-item'}>
                                        <img className={'user-avatar'}
                                             alt={'profile-picture'}
                                             src={user.photos.large ? user.photos.large : defaultUserAvatar} />
                                   </div>
                              </NavLink>
                              <div className={'user-data-block'}>
                                   <p className={'users-page-user-name'}
                                      title={user.name}>{truncateUserData(user.name)}</p>
                                   <p className={'users-page-user-status'}
                                      title={user.status}>{user.status ? truncateUserData(user.status) : 'No status'}</p>
                                   <button className={'user-follow-btn'}
                                           disabled={followUserFetch === user.id}
                                           onClick={() => handleFollowUser(user.id, user.followed)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                              </div>
                         </div>
                    )}
               </div>
          </>
     )
}

export default Users