import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Home/Home'
import HowItWorks from './HowItWorks/HowItWorks'
import Donation from './Donation/Donation'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/howitworks' element={<HowItWorks/>}/>
          <Route path='/donation' element={<Donation/>}/>
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
