export function setSignInModalState(value){
    return {
        type:'SET_SIGN_IN_MODAL_STATE',
        value : value.value
    }
}
export function setUserNameInput(value){
    return {
        type:'SET_USER_NAME_INPUT',
        value : value.value
    }
}
export function setPasswordInput(value){
    return {
        type:'SET_PASSWORD_INPUT',
        value : value.value
    }
}