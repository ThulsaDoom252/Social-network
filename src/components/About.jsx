import React from 'react';
import authHoc from './HOC/authHoc';
import { connect } from 'react-redux';

const About = () => {
     return (
          <div className='about-page'>
               <div className='content'>
                    <h1 className='title'>Samurai's Social Network</h1>
                    <p className='developer'>Developer: ThulsaDoom</p>
                    <p className='version'>Current Version: 1.5</p>
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
                         <br />
                    </p>
                    <p className='user-edit-data'>
                         User can edit the following data (only if direct edit mode is on):
                         <br />
                         - Personal info
                         <br />
                         - User-name
                         <br />
                         - Info: Is user looking for a job or not
                         <br />
                         - Info about skills/desired job description
                         <br />
                         - Edit current status (not dependent on direct edit mode option)
                    </p>
                    <p className='additional-functionality'>
                         Additionally, the following functionality has been implemented:
                         <br />
                         - User can be followed/unfollowed directly from the profile page.
                         <br />
                         - Add static user photos (not editable, can't be removed or added).
                    </p>
               </div>
          </div>
     );
};

const mapStateToProps = state => {
     return {
          auth: state.auth.isLogged
     };
};

export default connect(mapStateToProps, null)(authHoc(About));
