import React from 'react';

const About = () => {
     return (
          <div className='about-page'>
               <div className='content'>
                    <h1 className='title'>Samurai's social network v1.5</h1>
                    <p className='version'>Current Version: 1.5</p>
                    <p className='developer'>Developer: ThulsaDoom</p>
                    <div className='functionality'>
                         <h3 className='functionality-title'>Functionality:</h3>
                         <ul>
                              <li>User list browsing</li>
                              <li>Registration and login</li>
                              <li>Night mode</li>
                              <li>Preview of mobile version</li>
                              <li>Add/Remove Friends</li>
                              <li>Messages (non-functioning, static-only)</li>
                              <li>Edit Status</li>
                              <li>User can be followed/unfollowed directly from the profile page.</li>
                              <li>Add static user photos (not editable, can't be removed or added).</li>
                         </ul>
                    </div>
                    <div className='user-edit-data'>
                         <h4 className='edit-data-title'>User can edit the following data (only in direct edit mode):</h4>
                         <ul>
                              <li>Personal info</li>
                              <li>User-name</li>
                              <li>Is user looking for a job or not</li>
                              <li>Skills/desired job description</li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default About;
