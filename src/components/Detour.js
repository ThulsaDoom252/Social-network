import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import authHoc from './HOC/authHoc'
import { compose } from '@reduxjs/toolkit'

const Detour = ({ auth }) => {
     const currentUserId = useSelector(state => state.auth.id)

     if (!auth) {
          return <Navigate to={'/signIn'} />
     } else {
          return <Navigate to={`/profile/${currentUserId}`} />
     }
}

const mapStateToProps = state => {
     return {
          auth: state.auth.isLogged
     }
}

export default compose(connect(mapStateToProps, null), authHoc)(Detour)