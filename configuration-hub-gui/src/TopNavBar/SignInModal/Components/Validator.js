
const ERROR_LIST = []

function UserNameSpaceValidation(userName) {
    return !(userName.indexOf(' ') >= 0) ? [true] : [false, 'userName', 'User Name Cannot Have Spaces']

}

function UserNameLengthValidation(userName) {
    return userName.length > 5 ? [true] : [false, 'userName', 'User Name Must Be At Least 5 Letters Long']
}

function PasswordSpaceValidation(password) {
    return !(password.indexOf(' ') >= 0) ? [true] : [false, 'password', 'Password Cannot Have Spaces']

}

function PasswordLengthValidation(password) {
    return password.length > 5 ? [true] : [false, 'password', 'Password Must Be At Least 5 Letters Long']
}

export function resetFormColor() {
    document.getElementById('userName').style.border = '1px solid #ced4da'
    document.getElementById('password').style.border = '1px solid #ced4da'
    const idNames = ['userNameErrorTag', 'passwordErrorTag', 'NoUserError']

    idNames.forEach(name => {
        document.getElementById(name).innerHTML = ''
    })

}

export default function Validator(userName, password) {
    let answer = []

    answer.push(UserNameLengthValidation(userName))
    answer.push(UserNameSpaceValidation(userName))
    answer.push(PasswordLengthValidation(password))
    answer.push(PasswordSpaceValidation(password))

    return answer
}