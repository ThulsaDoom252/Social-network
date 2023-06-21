import React from 'react'
import { useSelector } from 'react-redux'
import {
     changeContactValue,
     setSelectedContactData,
     setUserThunk,
     toggleOverlay,
     updateProfileThunk
} from '../../redux/profile/profileSlice'
import Overlay from './Overlay'

const OverlayContainer = ({ dispatch }) => {
     const userPhotos = useSelector(state => state.profile.userPhotos)
     const selectedPhoto = useSelector(state => state.profile.selectedPhoto)
     const selectedContact = useSelector(state => state.profile.selectedContact)
     const selectedContactId = useSelector(state => state.profile.selectedContactId)
     const photoViewPort = useSelector(state => state.profile.showOverlayPhotoViewport)
     const profile = useSelector(state => state.profile.profile)

     const { userId } = profile

     const handleChangeSelectedContact = (e) => {
          dispatch(setSelectedContactData(e.currentTarget.value))
     }

     const handleSubmitData = async () => {
          dispatch(changeContactValue({ selectedContactId, selectedContact }))
          dispatch(updateProfileThunk({}))
          dispatch(setUserThunk(userId))
          handleCloseOverlay()
     }

     const handleCloseOverlay = () => dispatch(toggleOverlay(false))
     return <Overlay {...{
          handleCloseOverlay,
          photoViewPort,
          userPhotos,
          selectedPhoto,
          selectedContact,
          handleChangeSelectedContact,
          handleSubmitData
     }} />
}

export default OverlayContainer