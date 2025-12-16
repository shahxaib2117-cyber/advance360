import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'

const HomeLayout = () => {
    return (
        <div className='min-h-screen full flex flex-col relative '>
            <div className="container top-0 absolute overflow-hidden "><Navbar /></div>
            <Home />
        </div>
    )
}

export default HomeLayout
