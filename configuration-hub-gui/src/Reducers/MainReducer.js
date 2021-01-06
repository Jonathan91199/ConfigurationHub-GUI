import { act } from "react-dom/test-utils";

const defultState = {
    signInShowState : false
}

export default function MainReducer({state = defultState} = {}, action){
    switch(action.type){
        case 'SET_SIGN_IN_MODAL_STATE' :
            return{
                ...state,
                signInShowState : action.value 
            }

        default : return state
    }
}