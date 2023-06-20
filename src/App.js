import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderContainer from './components/Header/HeaderContainer'
import SettingsContainer from './components/Settings/SettingsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
     const dispatch = useDispatch()
     const nightMode = useSelector(state => state.settings.nightMode)
     return (
          <BrowserRouter>
               <div className={'wrapper'}>
                    <HeaderContainer {...{ dispatch }} />
                    <section className={'section-content'}>
                         <Routes>
                              <Route path={'/settings'} element={<SettingsContainer {...nightMode} />} />
                         </Routes>
                         Social Network content
                    </section>
               </div>
          </BrowserRouter>

     )
}
export default App
