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
import ConfirmRide from "./component/ConfirmRide";
import Vehiclepanel from "./component/Vehiclepanel";
import WaitingforDriver from './component/WaitingforDriver'
import LookingforDriver from './component/LookingforDriver'
import Riding from './Pages/Riding'
import Captainhome from './Pages/Captainhome'
import Captaindetails from './component/Captaindetails'
import Ridepopup from './component/Ridepopup'
import Confirmridepopup from './component/Confirmridepopup'

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
        <Route path='/confirmride' element={<ConfirmRide/>}/>
        <Route path='/vehiclepanel' element={<Vehiclepanel/>}/>
        <Route path='/waitfordriver' element={<WaitingforDriver/>}/>
        <Route path='/lookingfordriver' element={<LookingforDriver/>}/>
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/captainhome' element={<Captainhome/>}/>
        <Route path='/captaindetails' element={<Captaindetails/>}/>
        <Route path='/ridepopup' element={<Ridepopup/>}/>
        <Route path='/confirmridepopup' element={<Confirmridepopup/>}/>
      </Routes>
    </div>
  )
}

export default App
