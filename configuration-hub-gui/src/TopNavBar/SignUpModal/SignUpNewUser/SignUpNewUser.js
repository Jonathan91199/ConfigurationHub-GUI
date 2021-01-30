import Axios from 'axios'
import { setSignUpUserError, setSignUpExplenationAlert, setSignUpModalState, setUserConnectedInfo, setIsUserConnected } from '../../../Actions/MainReducerAction'
import {NotificationManager} from 'react-notifications'

export default function SignUpNewUser(that) {
    const INPUTS = getInputs()
    CheckUserExist(INPUTS, that)
}

function getInputs() {
    return {
        firstName: document.getElementById("FirstNameForm").value,
        lastName: document.getElementById("LastNameForm").value,
        email: document.getElementById("EmailAddForm").value,
        username: document.getElementById("userNameForm").value,
        password: document.getElementById("FirstPasswordForm").value,

    }
}

function CheckUserExist(inputs, that) {
    Axios.post(`http://localhost:51241/api/Authentication/register`, inputs)
        .then(res => {
            Axios.post(`http://localhost:51241/api/Authentication/authenticate`, {
                "username": inputs.username, "password": inputs.password
            }).then(res => {
                that.props.dispatch(setSignUpModalState({ value: false }))
                that.props.dispatch(setUserConnectedInfo({ value: res.data }))
                that.props.dispatch(setIsUserConnected({ value: true }))
            }).catch(err => NotificationManager.error(err.message))
        })
        .catch(err => {
            err.response.status === 400 ? triggerInvalidData(that, err, inputs) : NotificationManager.error(err.message)
        })


}

function triggerInvalidData(that, err, inputs){
    console.log(err.response)
    if(err.response.data.message.indexOf("already exists") >=0){
        that.props.dispatch(setSignUpUserError({value : `The User "${inputs.username}" Already Exists`}))
        that.props.dispatch(setSignUpExplenationAlert({value : "danger"}))
    }
    // that.props.dispatch(setSignUpUserError({value : ""}))
}