import React from 'react'
import authHoc from './HOC/authHoc'
import { connect } from 'react-redux'

const About = () => {
     return (
          <div className='about-page'>
               <div className='content'>
                    <h1 className='title'>Samurai's Social Network</h1>
                    <p className='developer'>Developer: ThulsaDoom</p>
                    <p className='version'>Current Version: 1.2</p>
                    <p className='functionality'>
                         Functionality:
                         <br />
                         - User list browsing
                         <br />
                         - Registration and login
                         <br />
                         - Night mode
                         <br />
                         - Preview of mobile version
                         <br />
                         - Add/Remove friends
                         <br />
                         - Messages (non-functioning)
                    </p>
               </div>
          </div>
     )
}

const mapStateToProps = state => {
     return {
          auth: state.auth.isLogged
     }
}

export default connect(mapStateToProps, null)(authHoc(About))