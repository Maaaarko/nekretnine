import React, { useEffect, useState } from "react"
import Image from "next/image"
import {
    PhoneIcon,
    MailIcon,
    ArrowsExpandIcon,
    CashIcon,
    HomeIcon,
} from "@heroicons/react/solid"
import { getAllListingIds, getListingData } from "../../dummy/listings"
import Box from "../../components/Box"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { server } from "../../config"
import { getFieldName } from "../../fieldNames"
import Collapsible from "../../components/Collapsible"

const Listing = ({ listingData }) => {
    return (
        <>
            <Header />
            <Box className="bg-gray-100 mx-2 my-4 p-1 md:m-10 md:p-5 shadow-xl">
                <h1 className="text-3xl m-5 p-2 font-bold mt-2">
                    {listingData.title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="col-span-3">
                        {renderImages(listingData)}

                        {renderSection1(listingData)}
                        {renderSection2(listingData)}
                        {renderSection3(listingData)}
                    </div>
                    <div>
                        <Box className="bg-gray-50 m-5 p-3 px-6 shadow-md">
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

const renderImages = (listingData) => {
    return (
        <Box className="m-5 p-1">
            <div className="relative flex-shrink-0 pb-1/2 shadow-xl shadow-gray-400/70">
                <Image
                    src={listingData.images[0]}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                />
            </div>
        </Box>
    )
}

const renderSection1 = (listingData) => {
    return (
        <Box className="bg-gray-50 m-5 p-3 px-6 shadow-md">
            <div className="flex items-center space-x-3 py-2">
                <CashIcon className="h-4" />
                <p>
                    {listingData.price} kn (
                    {Math.round(listingData.price / listingData.livingArea)}{" "}
                    kn/m<sup>2</sup>)
                </p>
            </div>
        </Box>
    )
}

const renderSection2 = (listingData) => {
    return (
        <div className="flex w-full">
            <Box className="bg-gray-50 flex w-full m-5 p-3 px-6 shadow-md">
                <p>{listingData.description}</p>
            </Box>
        </div>
    )
}

const renderSection3 = (listingData) => {
    return (
        <Box className="bg-gray-50 m-5 px-6 p-3 shadow-md grid grid-cols-2 items-center">
            <p>
                <b>Podtip:</b>
            </p>{" "}
            <p>{listingData.subType}</p>
            <hr className="col-span-2 my-2" />
            <p>
                <b>Godina izgradnje:</b>
            </p>{" "}
            <p>{listingData.yearBuilt}.</p>
            <hr className="col-span-2 my-2" />
            <p>
                <b>Godina zadnje renovacije:</b>
            </p>{" "}
            <p>{listingData.yearRenovated}.</p>
            <hr className="col-span-2 my-2" />
            <p>
                <b>Stambena površina:</b>
            </p>{" "}
            <p>
                {listingData.livingArea} m<sup>2</sup>
            </p>
            <hr className="col-span-2 my-2" />
            <p>
                <b>Ukupna površina:</b>
            </p>{" "}
            <p>
                {listingData.totalArea} m<sup>2</sup>
            </p>
            <hr className="col-span-2 my-2" />
            <p>
                <b>Površina okućnice:</b>
            </p>{" "}
            <p>{listingData.patioArea}</p>
            <hr className="col-span-2 my-2" />
            <div className="col-span-full">
                <Collapsible>
                    <div className="grid grid-cols-2 items-center">
                        <p>
                            <b>Spavaće sobe:</b>
                        </p>{" "}
                        <p>{listingData.numOfBedrooms}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Kupaone:</b>
                        </p>{" "}
                        <p>{listingData.numOfBathrooms}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Pune kupaone:</b>
                        </p>{" "}
                        <p>{listingData.numOfFullBathrooms}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Polukupaone:</b>
                        </p>{" "}
                        <p>{listingData.numOfHalfBathrooms}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Grijanje:</b>
                        </p>{" "}
                        <p>{listingData.heatingType}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Hlađenje:</b>
                        </p>{" "}
                        <p>{listingData.coolingType}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Parkirna mjesta:</b>
                        </p>{" "}
                        <p>{listingData.parkingSpacesTotal}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Vanjska parkirna mjesta:</b>
                        </p>{" "}
                        <p>{listingData.parkingSpacesOutside}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Garaža:</b>
                        </p>{" "}
                        <p>{listingData.garage}</p>
                        <hr className="col-span-2 my-2" />
                        {listingData.garage && (
                            <>
                                <p>
                                    <b>Površina garaže:</b>
                                </p>{" "}
                                <p>
                                    {listingData.garageSize} m<sup>2</sup>
                                </p>
                                <hr className="col-span-2 my-2" />
                                <p>
                                    <b>Garažna parkirna mjesta:</b>
                                </p>{" "}
                                <p>{listingData.garageParkingSpaces}</p>
                                <hr className="col-span-2 my-2" />
                            </>
                        )}
                        <p>
                            <b>Broj etaža:</b>
                        </p>{" "}
                        <p>{listingData.numOfStories}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Etaže:</b>
                        </p>{" "}
                        <p>{listingData.storiesSpan}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Kućanski uređaji:</b>
                        </p>{" "}
                        <p>{listingData.appliances}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Namještenost:</b>
                        </p>{" "}
                        <p>{listingData.degreeOfFurniture}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Podovi:</b>
                        </p>{" "}
                        <p>{listingData.floorType}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Krov:</b>
                        </p>{" "}
                        <p>{listingData.roofType}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Građevinski materijali:</b>
                        </p>{" "}
                        <p>{listingData.buildingMaterials}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Komunalne usluge:</b>
                        </p>{" "}
                        <p>{listingData.utilities}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Balkon, lođa, terasa:</b>
                        </p>{" "}
                        <p>{listingData.balcony}</p>
                        {listingData.balcony && (
                            <>
                                <p className="indent-8">Tip:</p>{" "}
                                <p>{listingData.balconyType}</p>
                            </>
                        )}
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Bazen:</b>
                        </p>{" "}
                        <p>{listingData.pool}</p>
                        {listingData.pool == "Da" && (
                            <>
                                <p className="indent-8">
                                    <b>Tip bazena:</b>
                                </p>{" "}
                                <p>{listingData.poolType}</p>
                                <p className="indent-8">
                                    <b>Površina bazena:</b>
                                </p>{" "}
                                <p>
                                    {listingData.poolSize} m<sup>2</sup>
                                </p>
                            </>
                        )}
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Sauna:</b>
                        </p>{" "}
                        <p>{listingData.sauna}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Vinski podrum:</b>
                        </p>{" "}
                        <p>{listingData.vineCellar}</p>
                        <hr className="col-span-2 my-2" />
                        <p>
                            <b>Teretana:</b>
                        </p>{" "}
                        <p>{listingData.gym}</p>
                        <hr className="col-span-2 my-2" />
                    </div>
                </Collapsible>
            </div>
        </Box>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch(`${server}/api/listings`).then((res) =>
            res.json()
        )
        const paths = res.data.map((listing) => {
            return {
                params: {
                    id: listing._id,
                },
            }
        })
        return {
            paths,
            fallback: false,
        }
    } catch (error) {
        return {
            paths: [],
            fallback: false,
        }
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`${server}/api/listings`).then((res) =>
            res.json()
        )
        const listingData = res.data.find(
            (listing) => listing._id === params.id
        )

        return {
            props: { listingData },
        }
    } catch (error) {
        return {
            props: {},
        }
    }
}

export default Listing
