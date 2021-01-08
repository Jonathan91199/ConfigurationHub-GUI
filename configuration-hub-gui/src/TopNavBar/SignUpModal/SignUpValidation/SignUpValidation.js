


export default function SingUpValidation(){
   
    const INPUT_FORMS = ["FirstNameForm", "LastNameForm", "EmailAddForm","userNameForm" ,"FirstPasswordForm" ,"SecondPasswordForm"]
    ResetAllForms(INPUT_FORMS)
    INPUT_FORMS.forEach(input =>{
        var fullInput= document.getElementById(input)
        if(fullInput.value.length === 0){
            fullInput.style.border = "1px solid red"
            document.getElementById(`${input}ErrorTag`).innerHTML = "This Input Is Mandatory"
        }
        else if(fullInput.value.indexOf(' ') >= 0){
            fullInput.style.border = "1px solid red"
            document.getElementById(`${input}ErrorTag`).innerHTML = "This Input Canno't Includ Spaces"
        }
    })
}

function ResetAllForms(inputs){
    inputs.forEach(input => {
        document.getElementById(input).style.border = "1px solid #ced4da"
        document.getElementById(`${input}ErrorTag`).innerHTML = ""

    })
}
