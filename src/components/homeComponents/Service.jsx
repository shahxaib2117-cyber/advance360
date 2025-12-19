import React, { useEffect, useState } from 'react'
import bg_img from '../../assets/home-imgs/service-bg-img.png'
import Button from '../commons/Button'
import { items_array } from '../../constants/cons'
import Modal from '../commons/Modal'

const Service = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')

    const handleClick = (index) => {
        setIsOpen(true)
        setTitle(items_array[index].text)
    }

    return (
        <div id='services' className='h-100 lg:h-screen w-full flex justify-center items-center relative '>
            <img src={bg_img} alt="" />
            <div className="h-full w-full flex flex-col justify-center tablet:items-center gap-3 lg:gap-5 absolute mb-10 pl-5 lg:pl-0 ">
                <p className='text-[30px] tablet:text-[40px] text-secondry_color bold-futura font-bold '>Our Service</p>
                <p className=' tablet:text-center text-[13px] lg:text-[17px] w-[90%] lg:w-[60%] normal-futura '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="h-40 tablet:h-50 lg:h-65 container flex whitespace-nowrap overflow-auto gap-5 tablet:pl-14 lg:pl-15 scroll-smooth ">
                    <Modal isOpen={isOpen} className={"self-center w-70 pb-3 tablet:w-100 min-h-50 mt-10 rounded-[10px] overflow-hidden "} onClose={() => setIsOpen(false)} >
                        <div className="h-full w-full flex flex-col justify-center items-center gap-5 ">
                            <p className='text-[17px] font-semibold '>{title}</p>
                            <p className='text-[15px] text-center w-9/10 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis ipsa dicta dolorum facilis. Architecto, labore voluptas illum dignissimos distinctio at eum dolores non, veniam aliquam, alias blanditiis impedit ad?
                            </p>
                        </div>
                    </Modal>
                    {items_array.map((data, index) => (
                        <div key={index} className="h-full w-40 tablet:w-50 lg:w-66 flex shrink-0 flex-col items-center text-center bg-[white] rounded-[20px] py-3 lg:py-5 gap-2 lg:gap-5  ">
                            <div className="h-15 w-14 tablet:h-17 tablet:w-17 lg:h-23 lg:w-23 rounded-full bg-secondry_color "></div>
                            <p className='max-w-[60%] text-[11px] whitespace-pre-wrap text-center tablet:text-[16px] lg:text-[18px] normal-futura '>{data.text} </p>
                            <Button lable={"Read More"} onclick={() => handleClick(index)} className={" bg-secondry_color text-[10px]! py-1.5! mt-1 tablet:text-[15px] lg:text-[16px] lg:px-9 lg:py-2! lg:scale-[1.25] "} />
                        </div>
                    ))}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Service