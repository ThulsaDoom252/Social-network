import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderContainer from './components/Header/HeaderContainer'
import SettingsContainer from './components/Settings/SettingsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInContainer from './components/Auth/SignInContainer'
import { initializeAppThunk } from './redux/appSlice'
import { useEffect } from 'react'
import { nightModeStyles } from './common/nightModeStyles'
import Initialize from './components/Initialize'
import Detour from './components/Detour'
import NotFound from './components/common/NotFound'
import UsersRelay from './components/Users/UsersRelay'
import About from './components/About'
import FriendsContainer from './components/Friends/FriendsContainer'

const App = () => {
     const dispatch = useDispatch()
     const nightMode = useSelector(state => state.settings.nightMode)
     const isLogged = useSelector(state => state.auth.isLogged)
     const initialized = useSelector(state => state.app.initialized)
     const showMobileLayout = useSelector(state => state.settings.showMobileVersion)


     useEffect(() => {
          if (nightMode) {
               document.body.style =
                    'background: linear-gradient(360deg, black, #2a2828, #121a34, #252a2d)'
          } else {
               document.body.style =
                    'background: linear-gradient(180deg, #5ee7c1, #00e8a5, #35cbff, #5ee7c1)'
          }
     }, [nightMode])

     useEffect(() => {
          dispatch(initializeAppThunk())
     }, [])

     if (!initialized) {
          return <Initialize />
     }

     return (
          <BrowserRouter>
               <div style={{ width: showMobileLayout ? '800px' : void 0 }} className={'wrapper'}>
                    {isLogged && <HeaderContainer {...{ dispatch }} />}
                    <section style={nightMode ? nightModeStyles.section : null}
                             className={isLogged && 'section-content'}>
                         <Routes>
                              <Route path={'/'} element={<Detour />} />
                              <Route path={'/friends'} element={<FriendsContainer nightMode={nightMode} />} />
                              <Route path={'/signIn'} element={<SignInContainer />} />
                              <Route path={'/users'} element={<UsersRelay />} />
                              <Route path={'/about'} element={<About />} />
                              <Route path={'/settings'} element={<SettingsContainer {...nightMode} />} />
                              <Route path='*' element={<NotFound />} />
                         </Routes>
                    </section>
               </div>
          </BrowserRouter>
     )
}
export default App
