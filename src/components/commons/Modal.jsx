import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
const Modal = ({ children, isOpen, className, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [isOpen])
    if (!isOpen) {
        return '';
    }



    return createPortal(
        <div onClick={onClose} className={` fixed flex justify-center items-center inset-0 z-50 bg-[#31303065]`}  >
            <div className={` ${className} bg-[#ffffff] flex flex-col `}>
                <div className="w-full flex justify-end pr-2 ">
                    <button onClick={onClose}
                        className=" text-gray-500 hover:font-semibold hover:text-gray-700">
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>,
        document.body
    )
}

export default Modal
