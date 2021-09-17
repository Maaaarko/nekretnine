import React, { useState } from "react"
import Image from "next/image"
import {
    SearchIcon,
    MenuAlt4Icon,
    UserCircleIcon,
} from "@heroicons/react/solid"
import locations from "../public/locations.json"

const Header = () => {
    const [searchInput, setSearchInput] = useState("")
    const [suggestions, setSuggestions] = useState([])

    const onChange = (e) => {
        const input = e.target.value
        let suggestions = []
        if (input.length > 0) {
            const regex = new RegExp(`^.*${input}.*$`, "i")
            suggestions = locations.filter((loc) =>
                regex.test(loc.ime + loc.zupanija?.ime)
            )

            const topSuggestions = suggestions
                .filter((e) =>
                    e.ime.toLowerCase().startsWith(input.toLowerCase())
                )
                .sort((a, b) => parseInt(a.id) - parseInt(b.id))
            console.log(suggestions)
            console.log(topSuggestions)
            const otherSuggestions = suggestions
                .filter(
                    (e) => !e.ime.toLowerCase().startsWith(input.toLowerCase())
                )
                .sort((a, b) => parseInt(a.id) - parseInt(b.id))

            const sortedSuggestions = topSuggestions.concat(otherSuggestions)

            setSuggestions(sortedSuggestions)
        } else {
            setSuggestions([])
        }
        setSearchInput(input)
    }

    const onClick = (item) => {
        console.log(item.ime)
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null
        }

        return (
            <ul className="my-2 items-center justify-center max-h-48 ">
                {suggestions

                    .map((item, index) => (
                        <li
                            key={index}
                            onClick={() => onClick(item)}
                            className="rounded-full flex items-center px-4 h-10 hover:bg-gray-200 active:scale-95 transition duration-150 overflow-hidden whitespace-nowrap overflow-ellipsis cursor-pointer">
                            {item.zupanija
                                ? `${item.ime}, ${item.zupanija.ime}`
                                : item.ime}
                        </li>
                    ))
                    .slice(0, 5)}
            </ul>
        )
    }

    return (
        <header className="sticky top-0 z-50 grid max-h-72 grid-cols-2 md:grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="hidden relative md:flex items-center h-10 cursor-pointer ">
                <Image
                    src="/images/logo.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div>
                <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
                    <input
                        value={searchInput}
                        onChange={onChange}
                        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                        type="text"
                        placeholder="Upiši lokaciju"
                    />
                    <SearchIcon className="hidden sm:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer sm:mx-2" />
                </div>

                {renderSuggestions()}
            </div>

            <div className="flex items-start space-x-4 justify-end text-gray-500">
                <div className="flex border-2 p-2 rounded-full cursor-pointer">
                    <MenuAlt4Icon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
