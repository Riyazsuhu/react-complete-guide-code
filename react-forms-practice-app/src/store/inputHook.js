import { useReducer } from 'react'

const inputReducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return {
                value: action.value, 
                isTouched: state.isTouched
            }
        case "BLUR":
            return {
                isTouched: true, 
                value: state.value
            }
        default:
            return {
                value: '',
                isTouched: false
            }
    }
}

const useInput = (validation) => {
    const [inputState, dispatchInputState] = useReducer(inputReducer, {
        value: '',
        isTouched: false
    })
    const isValidInput = validation(inputState.value)
    const isError = !isValidInput && inputState.isTouched

    const inputBlurHandler = () => {
        dispatchInputState({
            type: "BLUR"
        })
    }
    const inputHandler = e => {
        dispatchInputState({
            type: "INPUT",
            value: e.target.value
        })
    }
    const reset = () => {
        dispatchInputState({type:''})
    }

    const isInvalidClass = isError ? 'invalid' : ''

    return {
        inputValue: inputState.value,
        isValidInput,
        isError,
        inputHandler,
        inputBlurHandler,
        reset,
        isInvalidClass
    }
}

export default useInput