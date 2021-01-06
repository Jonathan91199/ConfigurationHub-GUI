import {setUserNameInput, setPasswordInput} from '../../../Actions/MainReducerAction'

function handleUserNameChange(that, value){
    that.props.dispatch(setUserNameInput({value : value}))
}

function handlePasswordChange(that,value){
    that.props.dispatch(setPasswordInput({value : value}))

}

export default function handleFormChange(that, type, value){
    const formChangeType = {
        'userName' : handleUserNameChange,
        'password' : handlePasswordChange
    }
    formChangeType[type](that, value)

}