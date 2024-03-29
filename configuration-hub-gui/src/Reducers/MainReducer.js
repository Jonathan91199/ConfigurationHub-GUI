
const defultState = {
    signInShowState: false,
    signUpShowState: false,

    inputUserName: '',
    inputPassword: '',

    SignUpUserError: '',
    SignUpExplenation: 'info',

    isUserConnected: false,
    userConnectedInfo: null,

    allSystems: [],
    selectedSystem: null,
    selectedSystemId: null,
    selectedMicroService: null,
    configData: null,
    SystemState: "BasicLoader",
    addNewSystemModal: false,
    microServiceModalState: false,

    signInState: "My Configurations"


}

export default function MainReducer(state = defultState, action) {
    switch (action.type) {
        case 'SET_IS_USER_CONNECTED': {
            return {
                ...state,
                isUserConnected: action.value
            }
        }
        case 'SET_USER_CONNECTED_INFO': {
            return {
                ...state,
                userConnectedInfo: action.value
            }
        }

        case 'SET_SIGN_IN_MODAL_STATE': {
            return {
                ...state,
                signInShowState: action.value
            }
        }
        case 'SET_SIGN_UP_MODAL_STATE': {
            return {
                ...state,
                signUpShowState: action.value
            }
        }

        case 'SET_USER_NAME_INPUT': {
            return {
                ...state,
                inputUserName: action.value,
                signInShowState: true
            }
        }
        case 'SET_PASSWORD_INPUT': {
            return {
                ...state,
                inputPassword: action.value,
                signInShowState: true
            }
        }
        case 'SET_SIGN_UP_USER_ERROR': {
            return {
                ...state,
                SignUpUserError: action.value
            }
        }
        case 'SET_SIGN_UP_EXPLENATION_ALERT': {
            return {
                ...state,
                SignUpExplenation: action.value
            }
        }

        case 'SET_SIGNED_IN_STATE': {
            return {
                ...state,
                signInState: action.value
            }
        }
        case 'SET_ALL_SYSTEMS': {
            return {
                ...state,
                allSystems: action.value
            }
        }
        case 'SET_SELECTED_SYSTEM_ID': {
            return {
                ...state,
                selectedSystemId: action.value
            }
        }
        case 'SET_SYSTEM_STATE': {
            return {
                ...state,
                SystemState: action.value
            }
        }
        case 'SET_SELECTED_SYSTEM': {
            return {
                ...state,
                selectedSystem: action.value
            }
        }
        case 'SET_SELECTED_MS': {
            return {
                ...state,
                selectedMicroService: action.value
            }
        }
        case 'SET_SELECTED_DATA': {
            return {
                ...state,
                configData: action.value
            }
        }
        case 'SET_MS_MODAL_STATE': {
            return {
                ...state,
                microServiceModalState: action.value
            }
        }
        case 'SET_SHOW_ADD_NEW_SYSTEM_MODAL': {
            return {
                ...state,
                addNewSystemModal: action.value
            }
        }

        default: return state
    }
}