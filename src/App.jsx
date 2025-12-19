import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactUs from './components/homeComponents/ContactUs'
import NotFound from './pages/NotFound'

function App() {

  const location = useLocation()

  return (
    <div className='appjsx-file min-h-screen w-full flex flex-col relative overflow-x-hidden '>
      <div className="w-full top-0 absolute overflow-hidden "><Navbar /></div>
      <div className={`${location.pathname === "/contactUs" ? "phone:mt-10 laptop:mt-0" : 'phone:mt-0 '} mt-14 lg:mt-10`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
