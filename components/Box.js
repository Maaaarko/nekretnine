import React from "react"

const Box = ({ children, className }) => {
    return <div className={`${className} rounded-3xl h-auto`}>{children}</div>
}

export default Box
