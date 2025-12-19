import React from 'react'
import { IoIosSend } from 'react-icons/io'//send
import { IoIosArrowRoundUp } from "react-icons/io";//arrow
import { AiOutlineLoading } from "react-icons/ai";//loading
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ lable, className, url, send = false, arrow = false, onclick, type = "button", isLoading, disabled }) => {
    const navigate = useNavigate()

    return (
        <Link to={url && url}>
            <button type={type} onClick={onclick} disabled={disabled} className={`px-5 py-2 cursor-pointer rounded-md bg-primry_color text-[white] text-[10px] whitespace-nowrap md:text-[16px] flex items-center font-semibold ${className} `}>
                {send ? <IoIosSend className='text-[#e8e8e9] text-[25px] mr-2 ' /> : ''}
                {lable}
                {arrow ? <IoIosArrowRoundUp className='text-[#e8e8e9] text-[25px] mr-2 rotate-45 ' /> : ''}
                {isLoading && <AiOutlineLoading className='text-[20px] ml-1 rotate-infinite ' />}
            </button>
        </Link>

    )
}

export default Button
