import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer'
import FriendsContainer from './components/Friends/FriendsContainer'
import GalleryContainer from './components/Gallery/GalleryContainer'
import UsersContainer from './components/Users/UsersContainer'
import MessagesContainer from './components/Messages/MessagesContainer'
import SettingsContainer from './components/Settings/SettingsContainer'
import EditProfileContainer from './components/EditProfile/EditProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'


const App = () => {
     return (
          <BrowserRouter>
               <HeaderContainer/>
               <Routes>
                    <Route path={'/profile'} element={<ProfileContainer />} />
                    <Route path={'/edit'} element={<EditProfileContainer />} />
                    <Route path={'/friends'} element={<FriendsContainer />} />
                    <Route path={'/gallery'} element={<GalleryContainer />} />
                    <Route path={'/users'} element={<UsersContainer />} />
                    <Route path={'/messages'} element={<MessagesContainer />} />
                    <Route path={'/settings'} element={<SettingsContainer />} />
                    <Route path={'/about'} element={<About />} />
               </Routes>
          </BrowserRouter>
     )
}
export default App
