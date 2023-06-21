import React from 'react'
import { nightModeStyles } from '../common/nightModeStyles'
import { SiFacebook, SiInstagram, SiTelegram, SiViber } from 'react-icons/si'

const About = ({ nightMode }) => {
     return (
          <div style={nightMode ? nightModeStyles.centerBlock : null} className='about-page'>
               <h1 className='title'>Samurai's social network</h1>
               <p className='version'>Current Version: 2.0</p>
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
                         <li className='functionality-item'> Edit personal information (directly on profile page or
                              at separate edit-profile page)>
                         </li>
                         <li className='functionality-item'>Edit contacts directly from profile page
                         </li>
                    </ul>
               </div>
               <div className='user-edit-data'>
                    <h4 className='edit-data-title'>User can edit the following data :</h4>
                    <ul className={'functionality-list'}>
                         <li className='functionality-item'>Personal info</li>
                         <li className='functionality-item'>User-name</li>
                         <li className='functionality-item'>Is user looking for a job or not</li>
                         <li className='functionality-item'>Skills/desired job description</li>
                         <li className='functionality-item'>Contacts</li>
                    </ul>
               </div>
               <div className={'about-page-contacts-block'}>
                    <div className={'about-page-contacts-label'}>Contact Me:</div>
                    <div className={'about-page-contacts'}>
                         <a style={{ color: '#248fc7' }} href={'https://t.me/ThulsaDoom92'}
                            className={'about-contact-item'}
                            target={'_blank'}><SiTelegram /></a>
                         <a style={{ color: '#f36208' }} href={'https://www.instagram.com/t_h_u_l_s_a_d_o_o_m/'}
                            className={'about-contact-item'}
                            target={'_blank'}><SiInstagram /></a>
                         <a style={{ color: '#1ba6ea' }} href={'https://www.facebook.com/xenolm252'}
                            className={'about-contact-item'}
                            target={'_blank'}><SiFacebook /></a>
                    </div>
               </div>
          </div>
     )
}

export default About
