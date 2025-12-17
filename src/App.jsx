import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Form from './components/homeComponents/Form'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<HomeLayout />} />
      </Routes>
    </>
  )
}

export default App















