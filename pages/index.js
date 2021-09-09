import Head from "next/head"
import Banner from "../components/Banner"
import Header from "../components/Header"
import SmallCard from "../components/SmallCard"

import locations from "../dummy/popularLocations"

export default function Home({ popularLocations }) {
    return (
        <div className="">
            <Head>
                <title>Nekretnine</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
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
            </main>
        </div>
    )
}

export async function getStaticProps() {
    // const popularLocations = await fetch("").then((res) => res.json()).catch((err) => console.log(err))
    const popularLocations = locations
    console.log(popularLocations)
    return {
        props: {
            popularLocations,
        },
    }
}
