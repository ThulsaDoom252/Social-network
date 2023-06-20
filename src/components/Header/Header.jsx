import React from 'react'
import { NavLink } from 'react-router-dom'
import defaultAvatar from '../common/default-avatar.jfif'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiLogoutBoxRLine } from 'react-icons/ri'

const Header = ({ userId, handleLogOut, userName, currentUserAvatar }) => {
     const navButtonsClass = 'header-navbar-button'
     const navButtonsActiveClass = 'header-navbar-button-active'
     return (
          <header className={'header-container'}>
               <div className={'header-current-user-block'}>
                    <div className={'header-current-avatar-item'}>
                         <img className={'header-current-avatar'}
                              src={defaultAvatar}
                              alt={'user-avatar'} />
                    </div>
                    <span className={'header-current-user-name'}>'ThulsaDoom'</span>
                    <button title='logout' className={'header-logout-button'}
                            onClick={handleLogOut}>
                         <RiLogoutBoxRLine />
                         <span className={'header-logOut-label'}>Log out</span>
                    </button>
               </div>
               <div className={'header-navbar'}>
                    <NavLink
                         className={state => state.isActive ? navButtonsActiveClass : navButtonsClass}
                         to={'/settings'}><IoSettingsOutline />Settings</NavLink>
               </div>
          </header>
     )
}

export default Header