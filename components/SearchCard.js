import React from "react"
import { useRouter } from "next/dist/client/router"

const SearchCard = (props) => {
    const router = useRouter()
    return (
        <div
            onClick={props.onSearch}
            className="flex items-center lg:justify-center h-8 p-5 mt-3 space-x-8 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
            <props.icon className="h-6 bg-red-400 text-white p-1 rounded-full" />

            <div>
                <h2 className="font-semibold">{props.name}</h2>
            </div>
        </div>
    )
}

export default SearchCard
