import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import PartnerLogin from './pages/PartnerLogin'
import PartnerSignup from './pages/PartnerSignup'
import { BookingHistory } from './components/BookingHistory'
import Privacy from './pages/Privacy'
import Term from './pages/Term'
import Setting from './pages/Setting'
import Support from './pages/Support'
import Partner from './pages/Partner'
import FindParkResult from './pages/FindParkResult'
import PaymentDetails from './pages/PaymentDetails'
import OwnerConfirmation from './pages/OwnerConfirmation'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Haven-Parking-App" />} />
        <Route path="/Haven-Parking-App" element={<Start />} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/partner' element={<Partner/>} />
        <Route path='/partnersignup' element={<PartnerSignup/>} />
        <Route path='/booking-history' element={<BookingHistory/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Term/>} />
        <Route path='/settings' element={<Setting/>} />
        <Route path='/support' element={<Support/>} />
        <Route path="/findresult" element={<FindParkResult />} />
        <Route path="/payment/:id" element={<PaymentDetails />} />
        <Route path="/ownerconfirmation/:id" element={<OwnerConfirmation />} />
      </Routes>
    </div>
  )
}

export default App
