import React from 'react'

const Input = ({ inpType = "input", ValueType = "text", placeholder, className, disabled, oncChange, name, required, min, max }) => {

    if (inpType == "input") {
        return <input type={ValueType} placeholder={placeholder} className={` outline-none ${className}`} />
    } if (inpType == "textarea") {
        return <textarea type={ValueType} placeholder={placeholder} className={` outline-none ${className}`} />
    }

}

export default Input
