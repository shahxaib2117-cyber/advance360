import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import Button from './commons/Button';
import { links } from '../constants/cons';
import { IoMenuOutline } from "react-icons/io5";
import Modal from './commons/Modal';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    console.log("🚀 ~ Navbar ~ toggle:", toggle)


    return (
        <div className='w-full bg-glass h-14 tablet:h-19 flex justify-between items-center px-2 z-50 fixed tablet:pl-15 '>
            {/* LOGO */}
            <div className="h-10 w-10 flex justify-center items-center laptop:hidden ">
                <IoMenuOutline onClick={() => setToggle(true)} className='text-[25px] text-[#1f5898] ' />
            </div>
            <div className="h-12 w-36 tablet:19 tablet:w-60 p-1 ml-5 tablet:ml-10 border-2 ">
                <img src={logo} className='h-full ' alt="" />
            </div>
            {/* navbar modal */}
            <Modal isOpen={toggle} onClose={() => setToggle(false)} className={`${toggle ? 'slide-on' : 'slide-off'}`} >

            </Modal>
            {/* LINKS */}
            <div className="h-full hidden flex-1 laptop:flex justify-around items-center gap-5 px-20  ">
                {
                    links.map((data, index) => (
                        <div key={index} className=" flex justify-between items-center gap-1 ">
                            {/* text */}
                            <div className="text-[14px] font-semibold whitespace-nowrap ">{data.text}</div>
                            {/* dropdown icon */}
                            {data.dropdown ?
                                <IoIosArrowDown className='mt-1' />
                                :
                                <div className=""></div>
                            }
                        </div>
                    ))
                }
            </div>
            {/* BUTTON */}
            <div className="h-full flex justify-center items-center tablet:w-50 tablet:mr-15 border-2 ">
                <Button lable={"Contact Us"} />
            </div>
        </div>
    )
}

export default Navbar
