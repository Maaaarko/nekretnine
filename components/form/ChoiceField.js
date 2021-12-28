import React from "react"

const ChoiceField = (props) => {
    const {
        label,
        type,
        name,
        handleChange,
        errorMessage,
        isValid,
        value,
        choices,
    } = props

    return (
        <div className="flex flex-grow flex-wrap">
            <p className="mx-2 w-full">
                <b>{label}</b>
            </p>
            <div className="flex flex-wrap  w-full md:w-1/2 m-2">
                {choices.map((choice, idx) => (
                    <div
                        className="form-check form-check-inline basis-1/2 md:basis-1/3"
                        key={idx}>
                        <input
                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-800 bg-white checked:border-2 checked:bg-gray-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name={name}
                            id="inlineRadio1"
                            value={choice.value}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor="inlineRadio10">
                            {choice.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChoiceField
