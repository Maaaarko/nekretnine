/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */
function createValidationRule(ruleName, errorMessage, validateFunc) {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunc,
    }
}

export function requiredRule(inputName) {
    return createValidationRule(
        "required",
        `${inputName} required`,
        (inputValue, formObj) => inputValue.length !== 0
    )
}

export function minLengthRule(inputName, minCharacters) {
    return createValidationRule(
        "minLength",
        `${inputName} should contain atleast ${minCharacters} characters`,
        (inputValue, formObj) => inputValue.trim().length >= minCharacters
    )
}

export function maxLengthRule(inputName, maxCharacters) {
    return createValidationRule(
        "minLength",
        `${inputName} cannot contain more than ${maxCharacters} characters`,
        (inputValue, formObj) => inputValue.trim().length <= maxCharacters
    )
}

export function integerRule(inputName) {
    return createValidationRule(
        "integer",
        `${inputName} must be an integer`,
        (inputValue, formObj) => Number.isInteger(parseFloat(inputValue))
    )
}

export function greaterThanZeroRule(inputName) {
    return createValidationRule(
        "greaterThanZero",
        `${inputName} must be greater than 0`,
        (inputValue, formObj) => parseInt(inputValue) > 0
    )
}

export function passwordMatchRule() {
    return createValidationRule(
        "passwordMatch",
        `passwords do not match`,
        (inputValue, formObj) => inputValue === formObj.password.value
    )
}
