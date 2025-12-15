import React from 'react'
import { IoCall } from "react-icons/io5";//phone
import { MdOutlineMailOutline } from "react-icons/md";//email
import { FaLocationDot } from "react-icons/fa6";//location
import { form_info, icons_array } from '../../constants/cons';
import { IoIosSend } from "react-icons/io";//send
import Button from '../commons/Button';
import Input from '../commons/Input';
const Form = () => {

    const send = <IoIosSend className='text-[#1B1C67] ' />

    return (
        <div className='min-h-screen w-full flex justify-center items-center mt-10 '>
            <div className=" bg-gradient w-[83%] flex gap-13 rounded-[20px] p-10 mr-8 ">
                {/* TEXT CONTENT */}
                <div className="flex-1 flex flex-col pl-2 pt-2 ">
                    <p className='text-[18px] text-[#ececec] italic-futura '>We're Here to Help You Share Your Story</p>
                    <p className=' text-[40px] text-[#ececec] w-[90%] leading-11 normal-futura '>Contact Us For Information On Our Services</p>
                    <p className='text-[17px] text-[#ececec] font-extralight! mt-9 normal-futura '>Have questions or need more information about our program? Reach out to us, and we'll be happy to assist. Let's keep the conversation going and create something truly extraordinary together.</p>
                    <div className="flex-1 ">
                        <div className="h-52 w-full flex flex-col justify-around mt-17">
                            {
                                form_info.map((data, index) => (
                                    <div key={index} className={` ${index == 1 && " border-2 border-[#ececec] rounded-[10px] "} flex items-center gap-3 p-3`}>
                                        {data.icon}
                                        <p className=' text-[20px] text-[#ececec] normal-futura '>{data.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="h-15 w-full items-center gap-4 flex ">
                            {
                                icons_array.map((data, index) => (
                                    <div key={index} className={`${index == 1 && "bg-slate-100"} h-13 w-13 flex justify-center items-center rounded-full  `}>
                                        {data.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* FORM */}
                <div className="h-full w-[58.5%] ml-1 rounded-[20px] p-10 bg-[#ffffff] ">
                    <p className='text-[40px] font-bold leading-10 text-[#1B1C67] '>Contact Us</p>
                    <div className="h-10 w-full flex items-center border-b-2 border-[#1B1C67]  mt-10 ">
                        <Input ValueType='text' placeholder={"Your Name"} className={`text-[20px] text-[#656464] normal-futura w-full`} />
                    </div>
                    <div className="h-10 w-full flex items-center border-b-2 border-[#1B1C67]  mt-10 ">
                        <Input ValueType='text' placeholder={"Phone No"} className={`text-[20px] text-[#656464] normal-futura w-full`} />
                    </div>
                    <div className="h-10 w-full flex items-center border-b-2 border-[#1B1C67]  mt-10 ">
                        <Input ValueType='text' placeholder={"Your Email"} className={`text-[20px] text-[#656464] normal-futura w-full`} />
                    </div>
                    <div className="h-30 w-full flex border-b-2 border-[#1B1C67]  mt-10 ">
                        <Input inpType='textarea' className={`min-h-10 max-h-25 w-full text-[20px] text-[#656464] outline-none normal-futura `} placeholder={"Your Message"} />
                        {/* <textarea name="" className='min-h-10 max-h-25 w-full text-[20px] text-[#656464] outline-none normal-futura ' placeholder='Your Message' id="">
                        </textarea> */}
                    </div>
                    <Button lable={`Send Message`} className={"mt-11 px-13 py-5 "} send="true" />
                </div>
            </div>
        </div>
    )
}

export default Form
