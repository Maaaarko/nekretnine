import React from "react"
import Image from "next/image"
import {
    SearchIcon,
    MenuAlt4Icon,
    UserCircleIcon,
} from "@heroicons/react/solid"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="/images/logo.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
                <input
                    className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Traži..."
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <div className="flex border-2 p-2 rounded-full cursor-pointer">
                    <MenuAlt4Icon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
