import React from "react"
import Image from "next/image"
import { MapIcon, HomeIcon, OfficeBuildingIcon } from "@heroicons/react/outline"

const SearchCard = (props) => {
    return (
        <div className="flex items-center lg:justify-center h-8 p-5 mt-3 space-x-8 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
            <props.icon className="h-4" />

            <div>
                <h2 className="font-semibold">{props.name}</h2>
            </div>
        </div>
    )
}

export default SearchCard
