import React from 'react'
import {} from 'react-router-dom'
import Sinin from '../Components/Signin.jsx'
import Body from '../Components/Body.jsx'
import { Route, Routes } from 'react-router-dom'
import Bell from '../Components/Bell.jsx'
import Navbar from '../Components/Navbar.jsx'
import Shorts from '../Components/Shorts.jsx'
import Subscription from '../Components/Subscribe.jsx'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Body/>}/> 
      <Route path='/Shorts' element={<Shorts/>}/> 
      <Route path='/Signin' element={<Sinin />} />
        <Route path='/bell' element={<Bell/>}/>
        <Route path='/Sub' element={<Subscription/>}/>
    </Routes>
    
    
  )
}
