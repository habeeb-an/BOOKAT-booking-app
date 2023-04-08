import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import ProfilePage from './pages/ProfilePage'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {UserContextProvider } from './UserContext'
import PlacesPage from './pages/PlacesPage'
import PlacesFormPage from './pages/PlacesFormPage'
import AccountNav from './AccountNav'
import DestinationPage from './pages/DestinationPage'

axios.defaults.baseURL ='http://localhost:4000/';
axios.defaults.withCredentials=true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/account/' element={<ProfilePage/>} />
          <Route path='/account/places' element={<PlacesPage/>} />
          <Route path='/account/bookings' element={<AccountNav/>} />
          <Route path='/account/places/new' element={<PlacesFormPage/>} />
          <Route path='/account/places/:id' element={<PlacesFormPage/>} />
          <Route path='/place/:id' element={<DestinationPage/>}  />
          
          </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App