import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignup from './Pages/CaptainSignup'
import { UserDataContext } from './Context/Usercontext'
import Start from './Pages/Start'
import UserHome from './Pages/UserHome'
import Locationsearchpanel from './component/Locationsearchpanel'

function App  () {

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<UserHome/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/locationsearch-panel' element={<Locationsearchpanel/>}/>
      </Routes>
    </div>
  )
}

export default App
