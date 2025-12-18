import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import Button from './commons/Button';
import { links } from '../constants/cons';
import { IoMenuOutline } from "react-icons/io5";
import Modal from './commons/Modal';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    // toggle for menu button
    const [toggle, setToggle] = useState(false)
    // dropdownid for dropdown
    const [dropDownId, setDropDownId] = useState(null)
    // isclicked for render menu
    const [clasName, setClasName] = useState(null)

    const handleSetClass = () => {
        if (clasName === "slide-off" || clasName === null) {
            setClasName("slide-on")
        } else {
            setClasName("slide-off")
        }
        setToggle(!toggle)
    }

    const location = useLocation()
    const navigate = useNavigate()

    const handleNavigate = (data) => {
        navigate("/")
        setTimeout(() => {
            document.getElementById(data.path)?.scrollIntoView({ behavior: "smooth" })
            console.log("🚀 ~ handleNavigate ~ (data.path:", (data.path))
        }, 200);
    }

    return (
        <div className=" w-full flex flex-col ">
            <div className='w-full bg-glass h-14 tablet:h-19 flex justify-between items-center px-2 z-50 fixed tablet:pl-15 '>
                <div className="h-10 w-10 flex justify-center items-center laptop:hidden ">
                    <div className={`${toggle ? "transition-all button-shadow duration-200 p-1 rounded-full " :
                        " "
                        } `}>
                        <IoMenuOutline onClick={() => handleSetClass()} className={` text-[25px] text-[#1f5898] `} />
                    </div>
                </div>
                {/* LOGO */}
                <Link to={"/"}>
                    <div className="h-12 w-36 tablet:19 tablet:w-60 p-1 ml-5 tablet:ml-10 tablet:h-18 cursor-pointer ">
                        <img src={logo} className='h-full ' alt="" />
                    </div>
                </Link>
                {/* LINKS */}
                <div className="h-full hidden flex-1 laptop:flex justify-around items-center gap-5 px-20 ">
                    {
                        links.map((data, index) => (
                            <div key={index} onMouseEnter={() => setDropDownId(index)} onMouseLeave={() => setDropDownId(null)} className=' cursor-pointer relative '>
                                <div onClick={() => handleNavigate(data)} className=" flex justify-between items-center gap-1">
                                    {/* text */}
                                    <div className="text-[14px] font-semibold whitespace-nowrap ">{data.text}</div>
                                    {/* dropdown icon */}
                                    {data?.dropdown?.status ?
                                        <IoIosArrowDown className={`${dropDownId === index && "rotate-180"} mt-1 transition-all duration-500 `} />
                                        :
                                        <div className=""></div>
                                    }
                                </div>
                                <div className={`duration-500 overflow-hidden rounded-md bg-[#ebebeb] px-3 border-[#acc0f3] absolute 
                                    ${(data?.dropdown?.status && dropDownId === index) ? " max-h-32 opacity-100 " : " max-h-0 opacity-0 "}  border-2 absolute p-2 `}>
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
                    <Link to={"/contactUs"}> <Button lable={"Contact Us"} /></Link>
                </div>
            </div>
            <div className={` w-full bg-slate-300 z-40 fixed flex flex-col justify-center items-center lg:hidden py-5 gap-2 mt-14 tablet:mt-19 
            ${clasName == null ? "hidden" : clasName}  `}>
                {
                    links.map((data, index) => (
                        <div onClick={() => handleNavigate(data)} key={index} className=" flex justify-between items-center p-1 gap-1 ">
                            {/* text */}
                            <div className="text-[14px] font-semibold whitespace-nowrap ">{data.text}</div>
                        </div>
                    ))
                }
            </div>
            {/* <div className={` h-30 w-full bg-slate-600  `}></div> */}
        </div >
    )
}

export default Navbar
