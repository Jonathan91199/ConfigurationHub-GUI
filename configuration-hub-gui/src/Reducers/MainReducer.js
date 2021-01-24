
const defultState = {
    signInShowState: false,
    signUpShowState : false,

    inputUserName: '',
    inputPassword: '',

    SignUpUserError : '',
    SignUpExplenation : 'info',

    isUserConnected : false,
    userConnectedInfo : null
    

}

export default function MainReducer( state = defultState , action) {
    switch (action.type) {
        case 'SET_IS_USER_CONNECTED' : {
            return {
                ...state,
                isUserConnected : action.value
            }
        }
        case 'SET_USER_CONNECTED_INFO' : {
            return {
                ...state,
                userConnectedInfo : action.value
            }
        }

        case 'SET_SIGN_IN_MODAL_STATE': {
            return {
                ...state,
                signInShowState: action.value
            }
        }
        case 'SET_SIGN_UP_MODAL_STATE' :{
            return{
                ...state,
                signUpShowState : action.value
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
        case 'SET_SIGN_UP_USER_ERROR' : {
            return {
                ...state,
                SignUpUserError : action.value
            }
        }
        case 'SET_SIGN_UP_EXPLENATION_ALERT' :{
            return {
                ...state,
                SignUpExplenation : action.value
            }
        }
        
        default: return state
    }
}