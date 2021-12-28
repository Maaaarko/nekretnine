import React, { useState } from "react"
import {
    ArrowCircleDownIcon,
    ArrowCircleUpIcon,
} from "@heroicons/react/outline"

const Collapsible = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="container">
            <div className={!isOpen && "hidden"}>{children}</div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`text-center ${
                    !isOpen
                        ? "backdrop-blur-sm bg-gradient-to-b from-transparent to-red-100 -mb-4 pt-2 -mx-6 rounded-b-3xl"
                        : "backdrop-blur-sm bg-gradient-to-b from-transparent to-red-100 -mb-4 pt-2 -mx-6 rounded-b-3xl"
                }`}>
                <button className="toggle text-center">
                    <div className="">
                        {isOpen ? (
                            <ArrowCircleUpIcon className="h-8 text-red-400 hover:scale-110 transition transform duration-200 ease-out" />
                        ) : (
                            <ArrowCircleDownIcon className="h-8 text-red-400 hover:scale-110 transition transform duration-200 ease-out" />
                        )}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Collapsible
