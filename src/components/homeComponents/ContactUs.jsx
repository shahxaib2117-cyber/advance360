import React from 'react'
import { IoCall } from "react-icons/io5";//phone
import { MdOutlineMailOutline } from "react-icons/md";//email
import { FaLocationDot } from "react-icons/fa6";//location
import { form_info, icons_array } from '../../constants/cons';
import { IoIosSend } from "react-icons/io";//send
import Button from '../commons/Button';
import Input from '../commons/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup'
const ContactUs = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "wrong name")
            .required("required!"),

        phoneNumber: Yup.number()
            .min(9, "wrong num")
            .required("required!"),

        email: Yup.string()
            .required("required!")
            .email(),

        message: Yup.string()
            .required("required!")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: "",
            email: '',
            message: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            const user = {
                userName: values.name,
                userPhoneNo: values.phoneNumber,
                userEmail: values.email,
                userMessage: values.message,
            }
            values.name = ''
            values.phoneNumber = ''
            values.email = ''
            values.message = ''
            resetForm()
            console.log("🚀 ~ ContactUs ~ user:", user)
        }
    })

    return (
        <div className='min-h-screen w-full flex justify-center items-center mt-10 '>
            <div className=" bg-gradient w-[95%] p-5 laptop:w-[83%] flex flex-col laptop:flex-row gap-13 rounded-[20px] laptop:p-10 laptop:mr-8 ">
                {/* TEXT CONTENT */}
                <div className="flex-1 flex flex-col pl-2 pt-2 ">
                    <p className='text-[18px] text-[#ececec] italic-futura '>We're Here to Help You Share Your Story</p>
                    <p className=' text-[40px] text-[#ececec] w-[90%] leading-11 normal-futura '>Contact Us For Information On Our Services</p>
                    <p className='leading-5 laptop:text-[17px] laptop:leading-6 text-[#ececec] font-extralight! mt-9 normal-futura '>Have questions or need more information about our program? Reach out to us, and we'll be happy to assist. Let's keep the conversation going and create something truly extraordinary together.</p>
                    <div className="flex-1 ">
                        <div className="h-52 w-full flex flex-col justify-around mt-5 laptop:mt-17">
                            {
                                form_info.map((data, index) => (
                                    <div key={index} className={` ${index == 1 && " border-2 border-[#ececec] rounded-[10px] "} flex items-center gap-3 p-2 laptop:p-3`}>
                                        {data.icon}
                                        <p className=' laptop:text-[20px] text-[#ececec] normal-futura '>{data.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="h-15 w-full items-center gap-4 flex mt-5 laptop:mt-0 ">
                            {
                                icons_array.map((data, index) => (
                                    <div key={index} className={`${index == 1 && "bg-slate-100"} h-10 w-10 laptop:h-13 laptop:w-13 flex justify-center items-center rounded-full  `}>
                                        {data.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* FORM */}
                {/* inpType='input' ValueType='text' */}
                {
                    <form onSubmit={formik.handleSubmit} className="h-full laptop:w-[58.5%] ml-1 rounded-[15px] laptop:rounded-[20px] py-5 px-7 laptop:py-10 
                    laptop:px-10 bg-[#ffffff] ">
                        <p className='font-bold text-[30px] leading-6 laptop:text-[40px] laptop:leading-10 text-primry_color '>Contact Us</p>
                        <div className="h-15 w-full flex flex-col mt-5 ">
                            <Input
                                name={"name"}
                                ValueType='text'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                placeholder={"your name"}
                                className={`text-[20px] text-[#656464] w-full `} />
                            <hr className='border border-primry_color text-primry_color ' />
                            {
                                (formik.errors.name && formik.touched.name) && (
                                    <p className='text-[red] text-[13px] '>{formik.errors.name}</p>
                                )
                            }
                        </div>
                        <div className="h-15 w-full flex flex-col mt-3 ">
                            <Input
                                name={"phoneNumber"}
                                ValueType='number'
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                                onBlur={formik.handleBlur}
                                placeholder={"Phone No"}
                                className={`text-[20px] text-[#656464] w-full`} />
                            <hr className='border border-pritext-primry_color ' />
                            {
                                (formik.errors.phoneNumber && formik.touched.phoneNumber) && (
                                    <p className='text-[red] text-[13px] '>{formik.errors.phoneNumber}</p>
                                )
                            }
                        </div>
                        <div className="h-15 w-full flex flex-col mt-3 lg:mt-5 ">
                            <Input
                                name={"email"}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                placeholder={"Your Email"}
                                className={`text-[20px] text-[#656464] w-full`} />
                            <hr className='border border-pritext-primry_color ' />
                            {
                                (formik.errors.email && formik.touched.email) && (
                                    <p className='text-[red] text-[13px] '>{formik.errors.email}</p>
                                )
                            }
                        </div>
                        <div className="h-30 w-full flex flex-col mt-3 lg:mt-5 ">
                            <Input
                                name={"message"}
                                inpType='textarea'
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                onBlur={formik.handleBlur}
                                placeholder={"Your Message"}
                                className={`min-h-10 max-h-25 w-full text-[20px] text-[#656464] outline-none `}
                            />
                            <hr className='border border-primry_color ' />
                            {
                                (formik.errors.message && formik.touched.message) && (
                                    <p className='text-[red] text-[13px] '>{formik.errors.message}</p>
                                )
                            }
                        </div>
                        <Button type="submit" lable={`Send Message`} disabled={!formik.dirty || !formik.isValid} className={"laptop:mt-11 laptop:px-13 laptop:py-5 "} send="true" />
                    </form>
                }

            </div>
        </div>
    )
}

export default ContactUs
