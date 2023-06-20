import React from 'react'
import { NavLink } from 'react-router-dom'
import defaultAvatar from '../common/default-avatar.jfif'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { ImUsers } from 'react-icons/im'
import { TfiInfoAlt } from 'react-icons/tfi'

const Header = ({ userId, handleLogOut, userName, currentUserAvatar }) => {
     const navButtonsClass = 'navbar-btn'
     const navButtonsActiveClass = 'navbar-btn-active'
     return (
          <header className={'header-container'}>
               <div className={'header-current-user-block'}>
                    <div className={'header-avatar-item'}>
                         <img className={'header-avatar'}
                              src={defaultAvatar}
                              alt={'user-avatar'} />
                    </div>
                    <span className={'header-user-name'}>'ThulsaDoom'</span>
                    <button title='logout' className={'logOut-btn'}
                            onClick={handleLogOut}>
                         <RiLogoutBoxRLine />
                         <span className={'header-logOut-label'}>Log out</span>
                    </button>
               </div>
               <div className={'navbar'}>
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