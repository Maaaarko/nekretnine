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
                className={`text-center ${
                    !isOpen
                        ? "backdrop-blur-sm bg-gradient-to-b from-transparent to-gray-300 -mb-3 -mt-6 -mx-6 rounded-b-3xl"
                        : "-mb-2 mt-2"
                }`}>
                <button
                    className="toggle text-center"
                    onClick={() => setIsOpen(!isOpen)}>
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
