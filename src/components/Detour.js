import React from 'react'
import { connect } from 'react-redux'
import authHoc from './HOC/authHoc'
import { compose } from '@reduxjs/toolkit'
import { toggleDirectEditMode, toggleMobileVersion, toggleNightMode } from '../redux/settingsSlice'
import SignInContainer from './Auth/SignInContainer'
import SettingsContainer from './Settings/SettingsContainer'

const Detour = ({ auth }) => {
     if (!auth) {
          return <SignInContainer />
     } else {
          return <SettingsContainer />
     }
}

const mapStateToProps = state => {
     return {
          auth: state.auth.isLogged
     }
}

export default compose(connect(mapStateToProps, null), authHoc)(Detour)