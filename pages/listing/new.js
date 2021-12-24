import React, { useState } from "react"
import Box from "../../components/Box"
import { server } from "../../config"

const NewListing = () => {
    const [form, setForm] = useState({})

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${server}/api/listings`, {
                method: "POST",
                body: JSON.stringify(form),
            })
        } catch (error) {
            console.log(error)
        }
    }

    const onChange = (e) => {
        e.preventDefault()

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Box className="bg-gray-200 m-5 p-10">
            <form onSubmit={onSubmit}>
                <Box className="grid grid-cols-3">
                    <div className="my-5">
                        <label className="mx-3">Description</label>
                        <input
                            name="description"
                            value={form.description}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">Price</label>
                        <input
                            name="price"
                            value={form.price}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">contactNumber</label>
                        <input
                            name="contactNumber"
                            value={form.contactNumber}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">contactEmail</label>
                        <input
                            name="contactEmail"
                            value={form.contactEmail}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">images</label>
                        <input
                            name="images"
                            value={form.images}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">type</label>
                        <input
                            name="type"
                            value={form.type}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">subType</label>
                        <input
                            name="subType"
                            value={form.subType}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">yearBuilt</label>
                        <input
                            name="yearBuilt"
                            value={form.yearBuilt}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">yearRenovated</label>
                        <input
                            name="yearRenovated"
                            value={form.yearRenovated}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">heatingType</label>
                        <input
                            name="heatingType"
                            value={form.heatingType}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">coolingType</label>
                        <input
                            name="coolingType"
                            value={form.coolingType}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">garage</label>
                        <input
                            name="garage"
                            value={form.garage}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">garageSize</label>
                        <input
                            name="garageSize"
                            value={form.garageSize}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">garageParkingSpaces</label>
                        <input
                            name="garageParkingSpaces"
                            value={form.garageParkingSpaces}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">parkingSpacesTotal</label>
                        <input
                            name="parkingSpacesTotal"
                            value={form.parkingSpacesTotal}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">parkingSpacesOutside</label>
                        <input
                            name="parkingSpacesOutside"
                            value={form.parkingSpacesOutside}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">numOfBedrooms</label>
                        <input
                            name="numOfBedrooms"
                            value={form.numOfBedrooms}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">numOfBathrooms</label>
                        <input
                            name="numOfBathrooms"
                            value={form.numOfBathrooms}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">numOfFullBathrooms</label>
                        <input
                            name="numOfFullBathrooms"
                            value={form.numOfFullBathrooms}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">numOfHalfBathrooms</label>
                        <input
                            name="numOfHalfBathrooms"
                            value={form.numOfHalfBathrooms}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">totalArea</label>
                        <input
                            name="totalArea"
                            value={form.totalArea}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">livingArea</label>
                        <input
                            name="livingArea"
                            value={form.livingArea}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">patioArea</label>
                        <input
                            name="patioArea"
                            value={form.patioArea}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">numOfStories</label>
                        <input
                            name="numOfStories"
                            value={form.numOfStories}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">storiesSpan</label>
                        <input
                            name="storiesSpan"
                            value={form.storiesSpan}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">appliances</label>
                        <input
                            name="appliances"
                            value={form.appliances}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">degreeOfFurniture</label>
                        <input
                            name="degreeOfFurniture"
                            value={form.degreeOfFurniture}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">floorType</label>
                        <input
                            name="floorType"
                            value={form.floorType}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">roofType</label>
                        <input
                            name="roofType"
                            value={form.roofType}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">buildingMaterials</label>
                        <input
                            name="buildingMaterials"
                            value={form.buildingMaterials}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">utilities</label>
                        <input
                            name="utilities"
                            value={form.utilities}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">balcony</label>
                        <input
                            name="balcony"
                            value={form.balcony}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">balconyType</label>
                        <input
                            name="balconyType"
                            value={form.balconyType}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">balconySize</label>
                        <input
                            name="balconySize"
                            value={form.balconySize}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">pool</label>
                        <input
                            name="pool"
                            value={form.pool}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">poolType</label>
                        <input
                            name="poolType"
                            value={form.poolType}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">poolSize</label>
                        <input
                            name="poolSize"
                            value={form.poolSize}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">sauna</label>
                        <input
                            name="sauna"
                            value={form.sauna}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">vineCellar</label>
                        <input
                            name="vineCellar"
                            value={form.vineCellar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="my-5">
                        <label className="mx-3">gym</label>
                        <input
                            name="gym"
                            value={form.gym}
                            onChange={onChange}
                        />
                    </div>
                </Box>
                <button type="submit" className="bg-white">
                    Submit
                </button>
            </form>
        </Box>
    )
}

export default NewListing
