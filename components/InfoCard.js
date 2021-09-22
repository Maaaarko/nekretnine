import React from "react"
import Image from "next/image"
import { StarIcon } from "@heroicons/react/outline"
import { ArrowsExpandIcon } from "@heroicons/react/outline"

const InfoCard = ({ image, title, description, size, price }) => {
    return (
        <div className="flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer">
            <div className="relative h-56 w-80 flex-shrink-0">
                <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col flex-grow md:pl-5 px-2 mt-3">
                <div className="flex justify-between">
                    <h4 className="text-xl">{title}</h4>
                    <StarIcon className="h-7 cursor-pointer" />
                </div>

                <div className="border-b w-10 pt-2" />

                <p className="hidden md:block pt-2 text-sm text-gray-500 flex-grow">
                    {description}
                </p>

                <div className="flex justify-between">
                    <p className="hidden md:inline-flex items-center text-gray-500">
                        <ArrowsExpandIcon className="h-5 text-gray-500 mr-1" />
                        {size} m<sup>2</sup>
                    </p>
                    <div className="flex flex-grow md:flex-grow-0 justify-between md:block">
                        <div>
                            <p className="text-xl lg:text-2xl font-semibold md:pb-2">
                                {price} kn
                            </p>
                        </div>
                        <div>
                            <p className="text-right text-gray-500">
                                {Math.round(price / size)} kn/m<sup>2</sup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
