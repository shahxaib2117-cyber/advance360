import React from 'react'
import logo from '../assets/logo.png'
import Button from './commons/Button'
import { footer_array } from '../constants/cons'

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center mt-25 '>
            <div className="container px-5 tablet:px-14 lg:px-0 ">
                <div className="min-h-30 w-full flex flex-col tablet:flex-col lg:flex-row tablet:px-5 lg:*:px-0 ">
                    {/* child_1 */}
                    <div className=" ">
                        <img src={logo} alt="" className='h-15 ' />
                        <p className='mt-5 futura-font italic-futura text-[#1B1C67] font-semibold '>Sign up for the Advance 360 Solutions newsletter <br /> for updates:</p>
                        <input type="text" className='h-9 w-50 tablet:w-90 mt-4 pl-3 border-2 rounded-md text-[13px] border-[#767575] outline-none ' placeholder='Enter Your name' />
                        <Button className={"px-13 tablet:px-33 mt-4 py-1! rounded-sm! text-[14px]! "} arrow={true} lable={"Let's Do It"} />
                    </div>
                    {/* child_2 */}
                    <div className="flex-1 flex flex-col mt-10 gap-10 justify-between
                    lg:flex-row lg:pl-30 lg:gap-0 lg:mt-0 lg:ml-10 ">
                        {
                            footer_array.map((data, index) => (
                                <div key={index} className="flex flex-col gap-4 w-50 ">
                                    {/* tilte */}
                                    <p className='text-[20px] text-[#1B1C67] normal-futura '>{data.title}</p>
                                    {
                                        data.text_array.map((dat, ind) => (
                                            <div key={ind} className=" flex gap-2 ">
                                                {dat.icon}
                                                <p className=' text-[14px] normal-futura '>{dat.text}</p>
                                            </div>
                                        ))
                                    }
                                    {data.icons_array &&
                                        <div className=" flex gap-2 ">
                                            {
                                                data.icons_array.map((dat, ind) => (
                                                    <div key={ind} className="">{dat.icon}</div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* footer blue line */}
            <div className="h-13 w-full flex justify-center items-center bg-[#1B1C67] mt-12 ">
                <div className="text-white text-[12px] text-center md:text-start ">Ⓒ All Rights Reserved 2024 -Advance 360 Solutions. Powered by Apex Web Studios</div>
            </div>
        </div>
    )
}

export default Footer
