import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Form from '../components/homeComponents/Form'

const HomeLayout = ({ children }) => {
    return (
        <div className='appjsx-file min-h-screen w-full flex flex-col relative overflow-x-hidden '>
            <div className="w-full top-0 absolute overflow-hidden "><Navbar /></div>
            <div className="mt-14 phone:mt-0 lg:mt-20">
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path="contactUs" element={<Form />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default HomeLayout
