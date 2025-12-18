import React from 'react'

const Input = ({ inpType = "input", ValueType = "text", placeholder, className, onChange, value, name, required, min, max, onBlur, id }) => {

    if (inpType == "input") {
        return <input
            type={ValueType}
            onChange={onChange}
            value={value}
            name={name}
            onBlur={onBlur}
            placeholder={placeholder}
            className={` outline-none ${className}`} />
    } if (inpType == "textarea") {
        return <textarea
            type={ValueType}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            name={name}
            onBlur={onBlur}
            className={` outline-none ${className}`} />
    }

}

export default Input
