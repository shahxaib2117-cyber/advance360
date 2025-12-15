import React from 'react'
import { IoIosSend } from 'react-icons/io'//send
import { IoIosArrowRoundUp } from "react-icons/io";//arrow

const Button = ({ lable, className, send = false, arrow = false }) => {
    return (
        <button className={`px-5 py-2 cursor-pointer rounded-md bg-[#1B1C67] text-[white] text-[10px] whitespace-nowrap md:text-[16px] flex items-center font-semibold ${className} `}>
            {send ? <IoIosSend className='text-[#e8e8e9] text-[25px] mr-2 ' /> : ''}
            {lable}
            {arrow ? <IoIosArrowRoundUp className='text-[#e8e8e9] text-[25px] mr-2 rotate-45 ' /> : ''}
        </button>
    )
}

export default Button
