import EmailValidator from 'email-validator';



export default function SingUpValidation() {
    const INPUT_FORMS = ["FirstNameForm", "LastNameForm", "EmailAddForm", "userNameForm", "FirstPasswordForm", "SecondPasswordForm"]
    ResetAllForms(INPUT_FORMS)
    let basicValidationAnswer = BasicValidation(INPUT_FORMS)
    let emailValidationAnswer = EmailValidation(document.getElementById("EmailAddForm").value)
    let dualPasswordValidaionAnswer = DualPasswordValidation(document.getElementById("FirstPasswordForm").value,document.getElementById("SecondPasswordForm").value )
    let termsOfServiceValidationAnswer = termsOfServiceValidation()
    
    return (basicValidationAnswer && emailValidationAnswer && dualPasswordValidaionAnswer && termsOfServiceValidationAnswer)
}

function ResetAllForms(inputs) {
    inputs.forEach(input => {
        document.getElementById(input).style.border = "1px solid #ced4da"
        document.getElementById("termsAgreeCheckboxMain").style.border = ""
        document.getElementById(`${input}ErrorTag`).innerHTML = ""
        document.getElementById("passwordIdenticalErrorBadge").innerHTML = ""


    })
}
function BasicValidation(inputForms) {
    var basicValidationAnswer = true
    inputForms.forEach(input => {
        var fullInput = document.getElementById(input)
        if (fullInput.value.length === 0) {
            fullInput.style.border = "1px solid red"
            document.getElementById(`${input}ErrorTag`).innerHTML = "This Input Is Mandatory"
            basicValidationAnswer = false
        }
        else if (fullInput.value.indexOf(' ') >= 0) {
            fullInput.style.border = "1px solid red"
            document.getElementById(`${input}ErrorTag`).innerHTML = "Do Not Use Spaces"
            basicValidationAnswer = false

        }
    })
    return basicValidationAnswer
}
function EmailValidation(emailAddress) {
    if (!EmailValidator.validate(emailAddress)) {
        document.getElementById("EmailAddForm").style.border = "1px solid red"
        document.getElementById("EmailAddFormErrorTag").innerHTML = "Email Not Valid"
        return false
    }
    else return true
}
function DualPasswordValidation(passwordOne, passwordTwo){
    if(passwordOne !== passwordTwo && passwordOne.length > 0 && passwordTwo.length >0 ){
        document.getElementById("FirstPasswordForm").style.border = "1px solid red"
        document.getElementById("SecondPasswordForm").style.border = "1px solid red"
        document.getElementById("passwordIdenticalErrorBadge").innerHTML = "Your Passwords Are Not Identical"
        return false
    } 
    else return true
}
function termsOfServiceValidation(){
    if(!document.getElementById("termsAgreeCheckbox").checked){
        document.getElementById("termsAgreeCheckboxMain").style.border = "1px solid red"
        return false
    } else return true

}
