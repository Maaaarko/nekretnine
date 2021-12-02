const listings = [
    {
        type: "kuće",
        title: "kuća br. 1",
        description: "opis kuće br. 1",
        image: "/images/listings/kuca1.jpg",
        size: 200,
        price: 100000,
        id: 1,
    },
    {
        type: "kuće",
        title: "kuća br. 2",
        description: "opis kuće br. 2",
        image: "/images/listings/kuca2.jpg",
        size: 200,
        price: 200000,
        id: 2,
    },
    {
        type: "kuće",
        title: "kuća br. 3",
        description: "opis kuće br. 3",
        image: "/images/listings/kuca3.jpg",
        size: 200,
        price: 300000,
        id: 3,
    },
    {
        type: "kuće",
        title: "kuća br. 4",
        description: "opis kuće br. 4",
        image: "/images/listings/kuca4.jpg",
        size: 200,
        price: 400000,
        id: 4,
    },
    {
        type: "kuće",
        title: "kuća br. 5",
        description: "opis kuće br. 5",
        image: "/images/listings/kuca5.jpg",
        size: 200,
        price: 500000,
        id: 5,
    },
    {
        type: "stanovi",
        title: "stan br. 1",
        description: "opis stana br. 1",
        image: "/images/listings/stan1.jpg",
        size: 200,
        price: 300000,
        id: 6,
    },
    {
        type: "stanovi",
        title: "stan br. 2",
        description: "opis stana br. 2",
        image: "/images/listings/stan2.jpg",
        size: 200,
        price: 400000,
        id: 7,
    },
    {
        type: "stanovi",
        title: "stan br. 3",
        description: "opis kuće br. 3",
        image: "/images/listings/stan3.jpg",
        size: 200,
        price: 500000,
        id: 8,
    },
]

export function getAllListingIds() {
    return listings.map((listing) => {
        return {
            params: {
                id: listing.id.toString(),
            },
        }
    })
}

export function getListingData(id) {
    return listings.find((listing) => listing.id === id)
}

export default listings
