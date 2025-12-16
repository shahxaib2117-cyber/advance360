import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='appjsx-file min-h-screen w-full flex flex-col relative overflow-x-hidden '>
        <div className="w-full top-0 absolute overflow-hidden "><Navbar /></div>
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App















