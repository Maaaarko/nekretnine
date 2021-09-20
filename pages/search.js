import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { AdjustmentsIcon, SwitchVerticalIcon } from "@heroicons/react/solid"

const Search = () => {
    return (
        <div className="h-screen">
            <Header />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">Prikazuje se $X$ nekretnina.</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        $Tip nekretnine$ u $GRAD$.
                    </h1>

                    <div className="flex mb-5 space-x-3 text-gray-800 whitespace-nowrap justify-end">
                        <div className="button flex items-center space-x-3">
                            <p>Filteri</p> <AdjustmentsIcon className="h-6" />
                        </div>
                        <div className="button flex items-center space-x-3">
                            <p>Sortiranje</p>{" "}
                            <SwitchVerticalIcon className="h-6" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search
