import React from "react"
import FormField from "../components/form/FormField"

import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    greaterThanZeroRule,
    integerRule,
} from "./inputValidationRules"

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
function createFormFieldConfig(
    label,
    name,
    type,
    defaultValue = "",
    choices = null
) {
    return {
        renderInput: (handleChange, value, isValid, touched, error, key) => {
            return (
                <FormField
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    touched={touched}
                    value={value}
                    choices={choices}
                    handleChange={handleChange}
                    errorMessage={error}
                />
            )
        },
        label,
        name,
        type,
        value: defaultValue,
        valid: false,
        errorMessage: "",
        touched: false,
    }
}

export const newListingForm = {
    title: {
        ...createFormFieldConfig("Naslov", "title", "text"),
        validationRules: [
            requiredRule("title"),
            minLengthRule("title", 5),
            maxLengthRule("title", 50),
        ],
    },
    type: {
        ...createFormFieldConfig("Tip", "type", "choice", undefined, [
            { label: "Kuća", value: "kuce" },
            { label: "Stan", value: "stanovi" },
        ]),
        validationRules: [requiredRule("type")],
    },
    subTypeKuce: {
        ...createFormFieldConfig("Podtip", "subTypeKuca", "choice", undefined, [
            { label: "Kuća u nizu", value: "kucaNiz" },
            { label: "Kuća s okućnicom", value: "kucaOkucnica" },
        ]),
        validationRules: [requiredRule("type")],
        prerequisites: [{ name: "type", value: "kuce" }],
    },
    subTypeStanovi: {
        ...createFormFieldConfig("Podtip", "subTypeStan", "choice", undefined, [
            { label: "Stan", value: "stanStan" },
            { label: "Penthouse", value: "stanPenthouse" },
        ]),
        validationRules: [requiredRule("type")],
        prerequisites: [{ name: "type", value: "stanovi" }],
    },
    description: {
        ...createFormFieldConfig("Opis", "description", "textarea"),
        validationRules: [
            requiredRule("description"),
            minLengthRule("description", 50),
            maxLengthRule("description", 500),
        ],
    },
    price: {
        ...createFormFieldConfig("Cijena (HRK)", "price", "number"),
        validationRules: [
            requiredRule("price"),
            integerRule("price"),
            greaterThanZeroRule("price"),
        ],
    },
}
