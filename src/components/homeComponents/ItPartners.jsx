import React from 'react'
import { it_partner__img } from '../../constants/cons'
import Button from '../commons/Button'
import { RiCheckboxCircleLine } from "react-icons/ri";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
const ItPartners = () => {
    return (
        <div id='itPartners' className='w-full flex flex-col tablet:pl-10 tablet:flex-row gap-5 lg:gap-13 lg:items-center laptop:pl-10! lg:pl-30 py-1 tablet:gap-1 '>
            {/* img */}
            <div className=" flex justify-center items-center h-80 p-5
            m_phone:h-85
            phone:h-90
            tablet:h-100 tablet:p-1
            lg:h-160">
                <img src={it_partner__img} className='h-full animate-mine ' alt="" />
            </div>
            {/* text contant */}
            <div className=" h-full flex-1 pl-5 
            tablet:pl-0 ">
                <div className="flex items-center gap-2">
                    <LiaGripLinesVerticalSolid className='text-xl tablet:text-lg lg:text-4xl rotate-90 ' />
                    <p className='text-[14px] teblet:text-[12px] lg:text-[14px] '>About Our Compony</p>
                </div>
                <p className=' leading-6 text-[25px] tablet:text-[25px] tablet:leading-7 lg:text-[35px] font-extrabold mt-2 md:mt-0 '>Let Us Be Your Partners <br /> Preferred IT Partner</p>
                {/* title */}
                <p className=' font-semibold text-[15px] mt-4 leading-5 normal-futura
                tablet:text-[14px] tablet:leading-4 
                lg:text-[17px] lg:mt-7 lg:w-[70%] laptop:w-[90%]! '>At Advanced360 Solutions, your challenges become our  challenges. With a foundation built on experience and  integrity, we partner with you to  respond to the change, to deploy timely solutions, and elevate your business to the next  level.</p>
                {/* button */}
                <Button lable={"Read More"} className={"mt-5 md:px-10 lg:mt-7 "} />
                {/* checks */}
                <div className='flex gap-1 mt-6 '>
                    <RiCheckboxCircleLine className='text-[18px] md:text-[21px] text-[#1B1C67] ' />
                    <p className='text-[12px] font-semibold normal-futura phone:text-[13px] tablet:text-[13px] leading-3 tablet:font-light laptop:text-[14px] '>We carefully evaluate to ensure there is a real and meaningful <br /> connection in each partner relationship.</p>
                </div>
                <div className='flex gap-1 mt-4 '>
                    <RiCheckboxCircleLine className='text-[18px] md:text-[21px] text-[#1B1C67] ' />
                    <p className='text-[12px] font-semibold normal-futura phone:text-[13px] tablet:text-[13px] leading-3 tablet:font-light laptop:text-[14px] '>We ensure there is a cultural alignment, their character and <br /> business practices must match ours.</p>
                </div>
                <div className='flex gap-1 mt-4 '>
                    <RiCheckboxCircleLine className='text-[18px] md:text-[21px] text-[#1B1C67] ' />
                    <p className='text-[12px] font-semibold normal-futura phone:text-[13px] tablet:text-[13px] leading-3 tablet:font-light laptop:text-[14px] '>We treat your business and your team like they are ours.</p>
                </div>
            </div>
        </div>
    )
}

export default ItPartners
