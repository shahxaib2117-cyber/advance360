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

    const [dropDownId, setDropDownId] = useState(null)


    return (
        <div className=" w-full flex flex-col ">
            <div className='w-full bg-glass h-14 tablet:h-19 flex justify-between items-center px-2 z-50 fixed tablet:pl-15 '>
                {/* LOGO */}
                <div className="h-10 w-10 flex justify-center items-center laptop:hidden ">
                    <div className={`${toggle ? "transition-all button-shadow duration-200 p-1 rounded-full " :
                        " "
                        } `}>
                        <IoMenuOutline onClick={() => setToggle(!toggle)} className={` text-[25px] text-[#1f5898] `} />
                    </div>
                </div>
                <div className="h-12 w-36 tablet:19 tablet:w-60 p-1 ml-5 tablet:ml-10 tablet:h-18 ">
                    <img src={logo} className='h-full ' alt="" />
                </div>
                {/* LINKS */}
                <div className="h-full hidden flex-1 laptop:flex justify-around items-center gap-5 px-20  ">
                    {
                        links.map((data, index) => (
                            <div key={index} className='relative '>
                                <a href={data.path} onMouseEnter={() => setDropDownId(index)} onMouseLeave={() => setDropDownId(null)} className=" flex justify-between items-center gap-1 group">
                                    {/* text */}
                                    <div className="text-[14px] font-semibold whitespace-nowrap ">{data.text}</div>
                                    {/* dropdown icon */}
                                    {data?.dropdown?.status ?
                                        <IoIosArrowDown className='mt-1 transition-all duration-500 group-hover:rotate-180 ' />
                                        :
                                        <div className=""></div>
                                    }
                                </a>
                                <div className={`duration-500 overflow-hidden rounded-md bg-[#ebebeb] px-3 border-[#acc0f3] ${(data?.dropdown?.status && dropDownId === index) ?
                                    " max-h-32 opacity-100 " : " max-h-0 opacity-0 "}  border-2 absolute p-2 `}>
                                    {
                                        data.dropdown?.dataa?.map((dat, ind) => (
                                            <p className='whitespace-nowrap text-[#205796] ' key={ind}>{dat.miniLink}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* BUTTON */}
                <div className="h-full flex justify-center items-center tablet:w-50 tablet:mr-15 ">
                    <Button lable={"Contact Us"} />
                </div>
            </div>
            <div className={` w-full bg-slate-300 z-40 fixed flex flex-col justify-center items-center py-5 gap-2 mt-14 tablet:mt-19 ${toggle ? "slide-on" : "slide-off"}  `}>
                {
                    links.map((data, index) => (
                        <a href={data.path} key={index} className=" flex justify-between items-center p-1 gap-1 ">
                            {/* text */}
                            <div className="text-[14px] font-semibold whitespace-nowrap ">{data.text}</div>
                        </a>
                    ))
                }
            </div>
            {/* <div className={` h-30 w-full bg-slate-600  `}></div> */}
        </div>
    )
}

export default Navbar
