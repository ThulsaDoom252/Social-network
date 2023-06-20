import React from 'react'
import { Link } from 'react-router-dom'

const SignUpBlock = () => {
     return (
          <div className={'login-page-right-part-signUp-block'}>
               <h1 className={'signUp-label'}>No account?</h1>
               <p className={'signUp-btn'}>
                    <Link style={{ width: '100%', textDecoration: 'none', color: 'white' }} target='_blank'
                          to='//social-network.samuraijs.com/signUp'
                          target='_blank'>Sign up</Link>
               </p>
          </div>
     )
}
export default SignUpBlock