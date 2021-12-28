import React, { useState } from "react"
import {
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
} from "@heroicons/react/solid"
import Box from "./Box"
import Image from "next/dist/client/image"

const ImageSlider = ({ images }) => {
    const [current, setCurrent] = useState(0)
    const length = images.length

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const changeImage = (idx) => {
        setCurrent(idx)
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null
    }

    return (
        <>
            <section className="slider relative flex justify-content-center items-center">
                <ArrowCircleLeftIcon
                    onClick={prevImage}
                    className="bg-white text-red-400 rounded-3xl h-8 absolute z-10 left-8 hover:scale-105 cursor-pointer"
                />
                <ArrowCircleRightIcon
                    onClick={nextImage}
                    className="bg-white text-red-400 rounded-3xl h-8 absolute z-10 right-8 hover:scale-105 cursor-pointer"
                />
                {images.map((image, idx) => (
                    <div
                        className={
                            idx === current
                                ? "slide active opacity-100 transition duration-500 flex-1"
                                : `slide opacity-0 transition duration-500 ease-in-out`
                        }
                        key={idx}>
                        {idx === current && (
                            <Box className="m-5 p-1">
                                <div className="relative flex-shrink-0 pb-9/16 shadow-xl shadow-gray-400/70">
                                    <Image
                                        src={image}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                    />
                                </div>
                            </Box>
                        )}
                    </div>
                ))}
            </section>
            <section className="thumbnails relative grid grid-cols-7 justify-content-center items-center mx-5">
                {images.map((image, idx) => (
                    <div key={idx}>
                        <Box
                            className={`p-1 ${
                                current === idx &&
                                "bg-red-400 transition duration-500 ease-in-out"
                            } rounded-md`}>
                            <div className="relative flex-shrink-0 pb-9/16 shadow-xl ">
                                <Image
                                    src={image}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md cursor-pointer"
                                    onClick={() => changeImage(idx)}
                                />
                            </div>
                        </Box>
                    </div>
                ))}
            </section>
        </>
    )
}

const getNearImages = (images, current) => {
    let sorted
}

export default ImageSlider
