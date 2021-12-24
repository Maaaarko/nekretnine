import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/dist/client/router"
import {
    SearchIcon,
    MenuAlt4Icon,
    UserCircleIcon,
} from "@heroicons/react/solid"
import locations from "../public/locations.json"
import { MapIcon, HomeIcon, OfficeBuildingIcon } from "@heroicons/react/solid"
import SearchCard from "./SearchCard"

const Header = ({ searchPlaceholder }) => {
    const wrapperRef = useRef(null)
    const [searching, setSearching] = useState(false)
    const router = useRouter()

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false)
        return () => {
            document.removeEventListener("click", handleClickOutside, false)
        }
    }, [])

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setSearching(false)
        }
    }

    const onSearchBarClick = () => {
        setSearching(true)
    }

    const onSearch = (type) => {
        router.push({
            pathname: "/search",
            query: {
                type: type.toLowerCase(),
            },
        })
        setSearching(false)
    }

    return (
        <header
            ref={wrapperRef}
            className="sticky top-0 z-50 bg-white shadow-md p-5 md:px-10">
            <div className="flex justify-between">
                <div className="hidden relative md:inline-flex w-1/12 justify-start items-center h-10 cursor-pointer">
                    <Image
                        src="/images/logo.png"
                        objectFit="contain"
                        objectPosition="left"
                        layout="fill"
                        onClick={() => router.push("/")}
                    />
                </div>

                <div className="flex w-6/12 md:w-4/12 items-center justify-center justify-items-end">
                    <button
                        onClick={onSearchBarClick}
                        className={
                            "flex justify-between items-center border-2 rounded-full py-2 md:shadow-sm flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 hover:shadow-2xl active:scale-90 transition duration-150 rounded-full md:shadow-sm " +
                            (searching && "hidden")
                        }>
                        {searchPlaceholder ? searchPlaceholder : "Što tražiš?"}
                        <SearchIcon className="hidden sm:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer sm:mx-2" />
                    </button>
                    <h2
                        className={
                            "text-2xl font-semibold flex justify-between items-center " +
                            (!searching && "hidden")
                        }>
                        Što tražiš?
                    </h2>
                </div>

                <div className="flex items-start space-x-4 justify-end text-gray-500">
                    <div className="flex border-2 p-2 rounded-full cursor-pointer">
                        <MenuAlt4Icon className="h-6" />
                        <UserCircleIcon className="h-6" />
                    </div>
                </div>
            </div>
            {searching && (
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-stretch lg:mx-48 lg:mt-3">
                    <SearchCard
                        icon={HomeIcon}
                        name="Kuće"
                        onSearch={() => onSearch("kuce")}
                    />
                    <SearchCard
                        icon={OfficeBuildingIcon}
                        name="Stanovi"
                        onSearch={() => onSearch("stanovi")}
                    />
                    <SearchCard
                        icon={MapIcon}
                        name="Zemljišta"
                        onSearch={() => onSearch("zemljista")}
                    />
                </div>
            )}
        </header>
    )
}

export default Header
