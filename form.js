let emailError= document.querySelector(".email-error");
let pwdError= document.querySelector(".password-error");
let conPwdError= document.querySelector(".confirmPwd-error");
let submitError= document.querySelector(".submit-error");

function validateEmail(){
    let email = document.getElementById("floatingInputReg").value;
    if (email.length==0){
        emailError.classList.remove("hidden");
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.classList.remove("hidden");
    }

    else
        emailError.classList.add("hidden");
    
}


function validatePassword(){
    let password = document.getElementById("floatingPasswordReg").value;
    if (password.length<8){
        pwdError.classList.remove("hidden");
    }

    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)){
        pwdError.classList.remove("hidden");
    }

    else
        pwdError.classList.add("hidden");
    
}

function confirmPassword(){
    let password = document.getElementById("floatingPasswordReg").value;
    let conPassword = document.getElementById("reconfloatingPasswordReg").value;
    if(password===conPassword){
        conPwdError.classList.add("hidden");
    }

    else 
    conPwdError.classList.remove("hidden");
}

function confirmData(){
    if(!validateEmail() || !validatePassword() || !confirmPassword()){
        submitError.classList.remove("hidden")
        return false;
    }

    else 
    submitError.classList.add("hidden")
    return true;
};
