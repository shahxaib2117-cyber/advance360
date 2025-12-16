import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
const Modal = ({ children, isOpen, parentClassName, className, onClose }) => {
    return createPortal(
        <div onClick={onClose} className={`${!isOpen ? " -translate-x-[300px] transition-all duration-1000 opacity-80" : "opacity-100 "} fixed inset-0 z-50 flex bg-[#31303065] ${parentClassName}`}  >
            <div className={`${className} h-full w-50 bg-[#c1c1c1] relative `}>
                <button onClick={onClose}
                    className=" top-2 right-2 text-gray-500 hover:font-semibold hover:text-gray-700 absolute">
                    ✕
                </button>
            </div>
            {children}
        </div>,
        document.body
    )
}

export default Modal
