import React from 'react'
import img from '../../assets/home-imgs/advanceSolution-img.png'
import Button from '../commons/Button'
import { logos } from '../../constants/cons'

const AdvanceSolutions = () => {
    return (
        <div id='advanceSolutions' className=' w-full flex flex-col pl-5 tablet:px-15 tablet:pl-18 lg:px-20 '>
            <div className=" w-full flex flex-col-reverse gap-15 md:flex-row  ">
                <div className="flex-1 flex flex-col lg:ml-5 lg:mt-30 ">
                    <div className=" ">
                        <p className='text-[20px] tablet:text-[25px] lg:text-[37px] text-secondry_color leading-6 tablet:leading-7 lg:leading-8 bold-futura '>Advanced solutions for <br /> advanced problems.</p>
                        <p className='text-[20px] tablet:text-[25px] lg:text-[37px] text-primry_color leading-6 tablet:leading-7 lg:leading-8 bold-futura  '>Schedule a free consultation <br />with Advanced360 Solutions <br /> today.</p>
                        <Button lable={"Contact Us"} className={" mt-5 lg:px-9 lg::mt-10 lg:scale-[1.25] lg:ml-5 "} />
                    </div>
                </div>
                <div className=" flex justify-center items-center h-70 p-5  
                phone:h-80
                tablet:h-90 
                lg:h-130 ">
                    <img src={img} className='h-full -translate-x-10 animate-mine ' alt="" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-10 mt-20 ">
                <p className='text-[25px] md:text-[40px] bold-futura text-primry_color '>Our Trusted Partners </p>
                <div className=" w-full! flex flex-col gap-y-5 
                 phone:grid grid-cols-2
                 tablet:flex-row tablet:justify-around 
                 lg:w-[70%]! lg:flex lg:gap-x-20 lg:gap-y-0! lg:self-center">
                    {logos.map((data, index) => (
                        <img key={index} src={data.logo} className={`${[1, 3].includes(index) && "ml-0 m_phone:ml-0 phone:ml-10 tablet:ml-45 lg:ml-0 "}
                         ${index == 3 ? "h-11 w-37" : "  h-8 md:h-10 w-35"} `} alt="" />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdvanceSolutions;
