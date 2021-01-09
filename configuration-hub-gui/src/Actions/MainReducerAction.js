export function setSignInModalState(value) {
    return {
        type: 'SET_SIGN_IN_MODAL_STATE',
        value: value.value
    }
}
export function setSignUpModalState(value) {
    return {
        type: 'SET_SIGN_UP_MODAL_STATE',
        value: value.value
    }
}
export function setUserNameInput(value) {
    return {
        type: 'SET_USER_NAME_INPUT',
        value: value.value
    }
}
export function setPasswordInput(value) {
    return {
        type: 'SET_PASSWORD_INPUT',
        value: value.value
    }
}

export function setSignUpUserError(value) {
    return {

        type: 'SET_SIGN_UP_USER_ERROR',
        value: value.value
    }
}
export function setSignUpExplenationAlert(value) {
    return {
        type: "SET_SIGN_UP_EXPLENATION_ALERT",
        value: value.value
    }
}