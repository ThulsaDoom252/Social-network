import React from 'react'
import Status from './Status'
import { Link, NavLink } from 'react-router-dom'
import { fetchUiSpin, nameData } from '../../../common/commonData'

const ProfileAvatarBlock = ({
                                 isCurrentUser,
                                 directEditMode,
                                 defaultAvatar,
                                 profileAvatarProps,
                                 statusProps
                            }) => {
     const [handleSubmit, handleChange, uploadPhoto, handleAvatarClick, nameEditMode, setNameEditMode,
          contactsBlockEditMode, setContactsBlockEditMode, values, errors, toggleProfileDataEditMode,
          handleContactBlockEditMode, contactsData, pointerCursor, hiddenFileInput, avatar, nameDataFetch,
          nameDataUploadStatus, handleFollowUser, isCurrentProfileFollowed, followUserFetch, userId] = profileAvatarProps


     return (
          <div className='profile-avatar-container'>
               <form onSubmit={handleSubmit}>
                    <div className={'profile-avatar-block'}>
                         <input ref={hiddenFileInput}
                                hidden={true} type={'file'}
                                onChange={uploadPhoto} />
                         <img className='profile-page-avatar'
                              style={pointerCursor}
                              onClick={handleAvatarClick}
                              src={avatar ? avatar : defaultAvatar}
                              alt='large photo' />
                         <div className={'profile-page-userName-container'}>
                              <p style={pointerCursor}
                                 onClick={() => toggleProfileDataEditMode(nameEditMode, setNameEditMode)}
                                 className={nameDataUploadStatus ? 'profile-page-left-part-name-uploaded' : 'profile-page-userName'}>{
                                   nameEditMode ?
                                        <input style={{ 'border': errors.fullName ? 'solid red thin' : 'solid thin' }}
                                               type={'text'}
                                               id={'fullName'}
                                               className={'name-input'} onChange={handleChange}
                                               value={values.fullName} autoFocus={true} onBlur={() =>
                                             toggleProfileDataEditMode(nameEditMode, setNameEditMode, nameData)} /> : nameDataFetch ? fetchUiSpin : values.fullName}</p>
                              {errors.fullName && <p className={'profile-page-input-error'}>{errors.fullName}</p>}
                         </div>
                         <Status  {...{ statusProps }} />
                         <div className={'profile-contacts-block'}>
                              {contactsData.map(contact => <span style={{ 'color': !contact.value && 'gray' }}
                                                                 key={contact.id}
                                                                 className={`profile-contact profile-page-left-contact-${contact.id}Icon`}>
                        {contact ? <Link
                             style={{ 'cursor': !contact.value && 'default' }}
                             onClick={e => handleContactBlockEditMode(e, contact.id, contact.value)}
                             to={contact.value && `//${contact.value}`} target={contact.value && '_blank'}>
                             {contact.icon}</Link> : contact.icon}
                        </span>)}
                         </div>
                         {directEditMode && isCurrentUser ? <p
                              className={'direct-contact-edit-button'}
                              style={{ 'cursor': 'pointer' }}
                              onClick={() => toggleProfileDataEditMode(contactsBlockEditMode, setContactsBlockEditMode)}>{contactsBlockEditMode ? 'Choose contacts to edit' : 'Edit Contacts'}</p> : null}
                         {isCurrentUser && !directEditMode &&
                              <NavLink to={'/edit'} hidden={directEditMode && !isCurrentUser}
                                       className={'profile-mobile-edit-btn'}>Edit
                                   Profile</NavLink>}
                    </div>
                    {!isCurrentUser &&
                         <button disabled={followUserFetch === userId}
                                 onClick={() => handleFollowUser({ isCurrentProfileFollowed })}
                                 className={'profile-follow-btn'}>{isCurrentProfileFollowed ? 'Unfollow' : 'Follow'}</button>}

               </form>
          </div>
     )
}

export default ProfileAvatarBlock

