import React from 'react'
import { darkBlue } from '../../constants/cons'
import bg_img from '../../assets/home-imgs/world-img.png'
import Button from '../commons/Button'
import { useNavigate } from 'react-router-dom'

const Transforming = () => {

    return (
        <div id='heroSection' className=' flex flex-col-reverse
            tablet:pl-13
            lg:pl-2
        laptop:flex-row-reverse ' >
            {/* bgdiv */}
            <div className=" h-52 mt-15 translate-x-0 pl-2 -translate-y-7
            m_phone:h-60
            phone:h-70 phone:flex-65 phone:p-0 
            tablet:pl-5 tablet:mt-10
            laptop:h-120! laptop:mt-40!
            lg:h-130 lg:mt-30">
                <img src={bg_img} className='h-full animate-mine duration-1000 ease-in-out ' alt="" />
            </div>
            {/* center heading */}
            <div className=" flex-35 phone:mt-20 ml-5 lg:ml-25 lg:pt-10 ">
                <p className=' text-[darkBlue] text-[15px] italic-futura w-8/10 lg:text-[18px]'>Driving Results for Commercial and Federal Success</p>
                <h1 className='text-[30px] leading-8 phone:text-[40px] phone:w-[80%] phone:leading-11 text-primry_color bold-futura text-start
                lg:text-[53px] lg:leading-14 '>Transforming <br className='phone:hidden lg:flex ' />
                    <span className='text-secondry_color '> Technology & <br className='phone:hidden lg:flex ' />
                        Strategy</span> for <br className='phone:hidden lg:flex ' /> Tomorrow</h1>
                {/* pera */}
                <p className='text-[14px] mt-5 w-8/10 leading-5 normal-futura
                lg:text-[16px] lg:w-full '>Explore our full range of consulting services designed to enhance
                    <br className='hidden lg:flex ' /> operational excellence, improve compliance, and drive sustainable growth</p>
                {/* button */}
                <Button url={"/contactUs"} className={" mt-5 lg:mt-7 "} lable={"Explore Now"} />
            </div>
        </div>
    )
}

export default Transforming;