import Axios from 'axios'
import { setSignUpUserError, setSignUpExplenationAlert } from '../../../Actions/MainReducerAction'


export default function SignUpNewUser(that) {
    const INPUTS = getInputs()
    CheckUserExist(INPUTS, that)
}

function getInputs() {
    return {
        firstName: document.getElementById("FirstNameForm").value,
        lastName: document.getElementById("LastNameForm").value,
        emailAddress: document.getElementById("EmailAddForm").value,
        userName: document.getElementById("userNameForm").value,
        password: document.getElementById("FirstPasswordForm").value,

    }
}

function CheckUserExist(inputs, that) {
    Axios.post(`http://localhost:8000/newUserExist`, inputs).then(res => {
        console.log(res.data)
        if (res.data[0]) {
            that.props.dispatch(setSignUpUserError({ value: res.data[1] }))
            that.props.dispatch(setSignUpExplenationAlert({ value: 'danger' }))
        }
        else (
            Axios.post(`http://localhost:8000/newUser`, inputs).then(() => {
                that.props.dispatch(setSignUpUserError({ value: "Success !" }))
                that.props.dispatch(setSignUpExplenationAlert({ value: 'success' }))
            }

            )
        )
    })
}