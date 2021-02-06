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
export function setIsUserConnected(value) {
    return {
        type : "SET_IS_USER_CONNECTED",
        value : value.value
    }
}
export function setUserConnectedInfo(value){
    return {
        type : "SET_USER_CONNECTED_INFO",
        value : value.value
    }
}
export function setSignedInState(value){
    return {
        type : "SET_SIGNED_IN_STATE",
        value : value.value
    }
}
export function setAllSystems(value){
    return {
        type : "SET_ALL_SYSTEMS",
        value : value.value
    }
}
export function setSelectedSystemId(value){
    return {
        type : 'SET_SELECTED_SYSTEM_ID',
        value : value.value
    }
}
export function setSystemState(value){
    return {
        type : 'SET_SYSTEM_STATE',
        value : value.value
    }
}
export function setSelectedSystem(value){
    return {
        type : 'SET_SELECTED_SYSTEM',
        value : value.value
    }
}
export function setMicroServiceModalState(value){
    return {
        type : 'SET_MS_MODAL_STATE',
        value : value.value
    }
}



