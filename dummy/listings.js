const listings = [
    {
        type: "kuce",
        title: "kuća br. 1",
        description: "opis kuće br. 1",
        image: "/images/listings/kuca1.jpg",
        size: 200,
        sizeTotal: 400,
        price: 100000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 1,
    },
    {
        type: "kuce",
        title: "kuća br. 2",
        description:
            "Ovo je opis kuće br. 2. Ova kuća je baš lijepa. U nju stane cijeeeeela obitelj. I pas. I mačka. I baka. I deda. I svi. U njoj ima puno soba. Sto plus sto je dvjesto. Dva na treću je osam. Ovo je jako zabavno za pisat. Tralala. Još moram smislit malo teksta da vidim kak će izgledat. Tralalala. Zasad mi se sviđa kako ovo izgleda.",
        image: "/images/listings/kuca2.jpg",
        size: 200,
        sizeTotal: 400,
        price: 200000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 2,
    },
    {
        type: "kuce",
        title: "kuća br. 3",
        description: "opis kuće br. 3",
        image: "/images/listings/kuca3.jpg",
        size: 200,
        sizeTotal: 400,
        price: 300000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 3,
    },
    {
        type: "kuce",
        title: "kuća br. 4",
        description: "opis kuće br. 4",
        image: "/images/listings/kuca4.jpg",
        size: 200,
        sizeTotal: 400,
        price: 400000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 4,
    },
    {
        type: "kuce",
        title: "kuća br. 5",
        description: "opis kuće br. 5",
        image: "/images/listings/kuca5.jpg",
        size: 200,
        sizeTotal: 400,
        price: 500000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 5,
    },
    {
        type: "stanovi",
        title: "stan br. 1",
        description: "opis stana br. 1",
        image: "/images/listings/stan1.jpg",
        size: 200,
        sizeTotal: 400,
        price: 300000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 6,
    },
    {
        type: "stanovi",
        title: "stan br. 2",
        description: "opis stana br. 2",
        image: "/images/listings/stan2.jpg",
        size: 200,
        sizeTotal: 400,
        price: 400000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 7,
    },
    {
        type: "stanovi",
        title: "stan br. 3",
        description: "opis kuće br. 3",
        image: "/images/listings/stan3.jpg",
        size: 200,
        sizeTotal: 400,
        price: 500000,
        contactNumber: "0981234567",
        contactEmail: "ivo.ivic@test.com",
        id: 8,
    },
]

export function getAllListingIds() {
    return listings.map((listing) => {
        return {
            params: {
                _id: listing._id.toString(),
            },
        }
    })
}

export function getListingData(_id) {
    return listings.find((listing) => listing._id === _id)
}

export default listings
