import React from "react"

const DoubleField = (props) => {
    const {
        label,
        type,
        name,
        handleChange,
        errorMessage,
        isValid,
        value,
        touched,
    } = props

    return (
        <>
            <p className="mx-2 w-full">
                <b>{label}</b>
            </p>
            <input
                type={type}
                step="0.01"
                name={name}
                value={value}
                onChange={handleChange}
                className={`border-sm border-2 rounded-xl py-1 px-3 m-2 w-full md:w-1/2 ${
                    isValid || !touched ? "border-gray-400" : "border-red-400"
                } `}
            />
        </>
    )
}

export default DoubleField
