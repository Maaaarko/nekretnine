import React from "react"
import Box from "../components/Box"
import useForm from "../hooks/useForm"
import { newListingForm } from "./formConfig"

export default function NewListingForm() {
    const { renderFormInputs, isFormValid } = useForm(newListingForm)

    return (
        <Box className="bg-gray-100 m-5 p-5 ">
            <form className="newListingForm">
                {renderFormInputs()}
                <button
                    className="bg-white px-10 py-4 shadow-md hover:shadow-2xl active:scale-90 transition duration-150 rounded-full m-5 cursor-pointer"
                    type="submit"
                    disabled={!isFormValid()}>
                    <div className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700">
                        Objavi oglas
                    </div>
                </button>
            </form>
        </Box>
    )
}
