import React from 'react'
import Transforming from '../components/homeComponents/Transforming'
import SuccessNumbers from '../components/homeComponents/SuccessNumbers'
import ItPartners from '../components/homeComponents/ItPartners'
import Service from '../components/homeComponents/Service'
import AdvanceSolutions from '../components/homeComponents/AdvanceSolutions'
import Form from '../components/homeComponents/ContactUs'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center gap-10 '>
            <Transforming />
            <SuccessNumbers />
            <ItPartners />
            <Service />
            <AdvanceSolutions />
            <Form />
        </div>
    )
}

export default Home