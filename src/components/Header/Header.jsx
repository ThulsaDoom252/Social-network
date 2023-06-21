import React from 'react'
import { NavLink } from 'react-router-dom'
import defaultAvatar from '../common/default-avatar.jfif'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { ImProfile, ImUsers } from 'react-icons/im'
import { TfiInfoAlt } from 'react-icons/tfi'
import { HiUsers } from 'react-icons/hi'
import { BiMessageSquareDots } from 'react-icons/bi'

const Header = ({ userId, handleLogOut, userName, currentUserAvatar }) => {
     const navButtonsClass = 'navbar-btn'
     const navButtonsActiveClass = 'navbar-btn-active'
     return (
          <header className={'header-container'}>
               <div className={'header-current-user-block'}>
                    <div className={'header-avatar-item'}>
                         <img className={'header-avatar'}
                              src={currentUserAvatar ? currentUserAvatar : defaultAvatar}
                              alt={'user-avatar'} />
                    </div>
                    <NavLink to={`/profile/${userId}`} className={'header-user-name'}>{userName}</NavLink>
                    <button title='logout' className={'logOut-btn'}
                            onClick={handleLogOut}>
                         <RiLogoutBoxRLine />
                         <span className={'header-logOut-label'}>Log out</span>
                    </button>
               </div>
               <div className={'navbar'}>
                    <NavLink
                         className={state => state.isActive ? navButtonsActiveClass : navButtonsClass}
                         to={`/profile/${userId}`}><ImProfile />Profile</NavLink>
                    <NavLink
                         className={state => state.isActive ? navButtonsActiveClass : navButtonsClass}
                         to={'/messages'}><BiMessageSquareDots />Messages</NavLink>
                    <NavLink
                         className={state => state.isActive ? navButtonsActiveClass : navButtonsClass}
                         to={'/friends'}><HiUsers />Friends</NavLink>
                    <NavLink
                         className={state => state.isActive ? navButtonsActiveClass : navButtonsClass}
                         to={'/settings'}><IoSettingsOutline />Settings</NavLink>
                    <NavLink
                         className={state => state.isActive ? navButtonsActiveClass : navButtonsClass}
                         to={'/users'}><ImUsers />Users</NavLink>
                    <NavLink
                         className={state => state.isActive ? navButtonsActiveClass : navButtonsClass}
                         to={'/about'}><TfiInfoAlt />About</NavLink>
               </div>
          </header>
     )
}

export default Header