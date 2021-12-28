import React from "react"
import ChoiceField from "./ChoiceField"
import TextAreaField from "./TextAreaField"
import TextInputField from "./TextInputField"

function FormField(props) {
    const { label, type, name, handleChange, errorMessage, isValid, value } =
        props

    const renderField = () => {
        switch (type) {
            case "text":
                return <TextInputField {...props} />
            case "textarea":
                return <TextAreaField {...props} />
            case "choice":
                return <ChoiceField {...props} />
            case "integer":
                return <IntegerField {...props} />
            case "double":
                return <DoubleField {...props} />
            default:
                return <TextInputField {...props} />
        }
    }

    return (
        <div className={`mx-5 my-3 flex flex-wrap items-center`}>
            {renderField()}
            {errorMessage && !isValid && (
                <span className=" text-red-400 font-semibold">
                    ({errorMessage})
                </span>
            )}
        </div>
    )
}

export default React.memo(FormField)
