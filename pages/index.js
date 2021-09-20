import Head from "next/head"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MediumCard from "../components/MediumCard"
import SmallCard from "../components/SmallCard"

import locations from "../dummy/popularLocations"
import properties from "../dummy/propertyTypes"

const Home = ({ popularLocations, propertyTypes }) => {
    return (
        <>
            <Head>
                <title>Nekretnine</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="py-6">
                    <h2 className="text-4xl font-semibold pb-6">
                        Popularne lokacije
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {popularLocations?.map((item, i) => (
                            <SmallCard
                                key={i}
                                image={item.image}
                                name={item.name}
                                listings={item.listings}
                            />
                        ))}
                    </div>
                </section>

                <section className="py-6">
                    <h2 className="text-4xl font-semibold pb-6">
                        Zanimaju me...
                    </h2>
                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                        {propertyTypes?.map((item, i) => (
                            <MediumCard
                                key={i}
                                image={item.image}
                                name={item.name}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    // const popularLocations = await fetch("/popularLocations").then((res) => res.json()).catch((err) => console.log(err))
    const popularLocations = locations

    // const propertyTypes = await fetch("/propertyTypes").then((res) => res.json()).catch((err) => console.log(err))
    const propertyTypes = properties

    return {
        props: {
            popularLocations,
            propertyTypes,
        },
    }
}

export default Home
