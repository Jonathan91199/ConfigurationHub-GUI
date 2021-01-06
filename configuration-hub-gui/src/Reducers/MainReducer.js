import { act } from "react-dom/test-utils";

const defultState = {
    signInShowState: false,
    inputUserName: '',
    inputPassword: ''

}

export default function MainReducer( state = defultState , action) {
    switch (action.type) {
        case 'SET_SIGN_IN_MODAL_STATE': {
            return {
                ...state,
                signInShowState: action.value
            }
        }
        case 'SET_USER_NAME_INPUT': {
            return {
                ...state,
                inputUserName: action.value,
                signInShowState : true
            }
        }
        case 'SET_PASSWORD_INPUT' : {
            return {
                ...state,
                inputPassword : action.value,
                signInShowState : true
            }
        }
        default: return state
    }
}