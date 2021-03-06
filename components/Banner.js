import React from "react"
import Image from "next/image"
import { useRouter } from "next/dist/client/router"

const Banner = () => {
    const router = useRouter()

    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="/images/banner.png" layout="fill" objectFit="cover" />
            <div className="absolute top-1/3 w-full text-center">
                <p className="font-bold text-sm sm:text-lg">
                    Prodaješ nekretninu?
                </p>
                <button
                    className="bg-white px-10 py-4 shadow-md hover:shadow-2xl active:scale-90 transition duration-150 rounded-full my-3"
                    onClick={() => router.push("/listing/newListing")}>
                    <div className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700">
                        Objavi oglas
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Banner
