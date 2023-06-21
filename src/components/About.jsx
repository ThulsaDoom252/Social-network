import React from 'react'

const About = () => {
     return (
          <div className='about-page'>
               <div className='content'>
                    <h1 className='title'>Samurai's social network v1.5</h1>
                    <p className='version'>Current Version: 1.5</p>
                    <p className='developer'>Developer: ThulsaDoom</p>
                    <div className='functionality'>
                         <h3 className='functionality-title'>Functionality:</h3>
                         <ul className={'functionality-list'}>
                              <li className='functionality-item'>User list browsing</li>
                              <li className='functionality-item'>Registration and login</li>
                              <li className='functionality-item'>Night mode</li>
                              <li className='functionality-item'>Preview of mobile version</li>
                              <li className='functionality-item'>Add/Remove Friends</li>
                              <li className='functionality-item'>Messages (non-functioning, static-only)</li>
                              <li className='functionality-item'>Edit Status</li>
                              <li className='functionality-item'>User can be followed/unfollowed directly from the
                                   profile page.
                              </li>
                              <li className='functionality-item'>Add static user photos (not editable, can't be removed
                                   or added).
                              </li>
                         </ul>
                    </div>
                    <div className='user-edit-data'>
                         <h4 className='edit-data-title'>User can edit the following data (only in direct edit
                              mode):</h4>
                         <ul className={'functionality-list'}>
                              <li className='functionality-item'>Personal info</li>
                              <li className='functionality-item'>User-name</li>
                              <li className='functionality-item'>Is user looking for a job or not</li>
                              <li className='functionality-item'>Skills/desired job description</li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default About
