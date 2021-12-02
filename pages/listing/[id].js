import React, { useEffect, useState } from "react"
import Image from "next/image"
import { getAllListingIds, getListingData } from "../../dummy/listings"
import Box from "../../components/Box"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Listing = ({ listingData }) => {
    return (
        <>
            <Header />
            <Box className="bg-gray-100 m-10 p-5">
                <h1 className="px-5">{listingData.title}</h1>
                <Box className=" m-5 p-2 w-2/3">
                    <div className="relative flex-shrink-0 pb-1/2">
                        <Image
                            src={listingData.image}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl"
                        />
                    </div>
                </Box>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <Box className="bg-gray-50 m-5 p-3 px-8 h-32">
                        <h1>Cijena: {listingData.price} kn</h1>
                    </Box>
                    <Box className="bg-gray-50 m-5 px-8 p-3">
                        <h1>
                            Površina: {listingData.size} m<sup>2</sup>
                        </h1>
                    </Box>
                </div>
                <div className="flex w-full">
                    <Box className="bg-gray-50 flex w-full m-5 p-3 px-8">
                        <h1>{listingData.description}</h1>
                    </Box>
                </div>
            </Box>
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllListingIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const listingData = getListingData(parseInt(params.id))
    return {
        props: {
            listingData,
        },
    }
}

export default Listing
