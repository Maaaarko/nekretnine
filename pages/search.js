import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { AdjustmentsIcon, SwitchVerticalIcon } from "@heroicons/react/solid"
import { useRouter } from "next/dist/client/router"
import { capitalize } from "../utils"
import InfoCard from "../components/InfoCard"
import listings from "../dummy/listings"
import image from "next/image"

const Search = ({ searchResults }) => {
    const router = useRouter()

    const { type, location } = router.query

    return (
        <div className="h-screen">
            <Header
                searchPlaceholder={`${capitalize(type) || "Sve nekretnine"} | ${
                    capitalize(location) || "Sve lokacije"
                }`}
            />

            <main className="flex">
                <section className="flex-grow pt-8 md:pt-14 px-6">
                    <p className="text-xs">
                        Prikazuj
                        {[2, 3, 4].includes(searchResults.length % 10)
                            ? "u "
                            : "e "}
                        se {searchResults.length} nekretnin
                        {[2, 3, 4].includes(searchResults.length % 10)
                            ? "e"
                            : "a"}
                        .
                    </p>
                    {type && (
                        <h1 className="text-3xl font-bold mt-2">
                            {capitalize(type)}
                        </h1>
                    )}

                    {location && <h3 className="text-2xl mb-6">test</h3>}

                    <div className="flex mt-3 mb-1 space-x-3 text-gray-800 whitespace-nowrap md:justify-end">
                        <div className="button flex items-center space-x-3">
                            <p>Filteri</p> <AdjustmentsIcon className="h-6" />
                        </div>
                        <div className="button flex items-center space-x-3">
                            <p>Sortiranje</p>{" "}
                            <SwitchVerticalIcon className="h-6" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {searchResults ? (
                            searchResults.map(
                                (
                                    { image, title, description, size, price },
                                    id
                                ) => (
                                    <InfoCard
                                        key={id}
                                        image={image}
                                        title={title}
                                        description={description}
                                        size={size}
                                        price={price}
                                    />
                                )
                            )
                        ) : (
                            <h3 className="text-2xl font-semibold mb-6">
                                Nema pronađenih rezultata
                            </h3>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export const getServerSideProps = async ({ query }) => {
    // const searchResults = await fetch("https://links.papareact.com/isz").then((res) => res.json())

    const searchResults = listings.filter((item) => item.type === query.type)

    return {
        props: {
            searchResults,
        },
    }
}
