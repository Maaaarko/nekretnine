import React, { useEffect, useState } from "react"
import Image from "next/image"
import { PhoneIcon, MailIcon } from "@heroicons/react/solid"
import { getAllListingIds, getListingData } from "../../dummy/listings"
import Box from "../../components/Box"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Listing = ({ listingData }) => {
    return (
        <>
            <Header />
            <Box className="bg-gray-100 mx-2 my-4 p-1 md:m-10 md:p-5">
                <h1 className="text-3xl m-5 p-2 font-bold mt-2">
                    {listingData.title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="col-span-3">
                        <Box className="m-5 p-1">
                            <div className="relative flex-shrink-0 pb-1/2">
                                <Image
                                    src={listingData.image}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded"
                                />
                            </div>
                        </Box>

                        <Box className="bg-gray-50 m-5 p-3 px-6">
                            <h1>Cijena: {listingData.price} kn</h1>
                            <p>
                                Cijena po m<sup>2</sup>:{" "}
                                {Math.round(
                                    listingData.price / listingData.size
                                )}{" "}
                                kn
                            </p>
                            <p>
                                Stambena površina: {listingData.size} m
                                <sup>2</sup>
                            </p>
                        </Box>
                        <Box className="bg-gray-50 m-5 px-6 p-3">
                            <p>
                                Ukupna površina: {listingData.sizeTotal} m
                                <sup>2</sup>
                            </p>
                        </Box>

                        <div className="flex w-full">
                            <Box className="bg-gray-50 flex w-full m-5 p-3 px-6">
                                <p>{listingData.description}</p>
                            </Box>
                        </div>
                    </div>
                    <div>
                        <Box className="bg-gray-50 m-5 p-3 px-6 ">
                            <div className="flex items-center space-x-3 py-2">
                                <PhoneIcon className="h-4" />
                                <p>{listingData.contactNumber}</p>
                            </div>
                            <div className="flex items-center space-x-3 py-2">
                                <MailIcon className="h-4" />
                                <p>{listingData.contactEmail}</p>
                            </div>
                        </Box>
                    </div>
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
