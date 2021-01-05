import { act } from "react-dom/test-utils";

const defultState = {
    testState : true
}

export default function MainReducer({state = defultState} = {}, action){
    switch(action.value){
        default : return state
    }
}