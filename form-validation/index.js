var nameError=document.getElementById('name-error')
var emailError=document.getElementById('email-error')
var passwordError=document.getElementById('password-error')

 function validateName(){
    var name=document.getElementById('name-field').value;


    if(name.length ==0){
        // nameError.innerHTML='name is required'
        return false;
    }
    
    if(name.length !== 0){
        nameError.innerHTML=''
        return true;
    }

}
function validateEmail(){
    var email=document.getElementById("email-field").value;

    if(email.length == 0){
       
        return false;
    }
    if(email.length !== 0){
        emailError.innerHTML=''
        return true
    }
}
function validatePassword(){
    var password=document.getElementById('password-field').value;
    if(password.length == 0){
        return false;
    }
    if(password.length !==0){
        passwordError.innerHTML=''
        return true;
    }
}

function submit(){
    if(!validateName()){
        nameError.innerHTML='name is required'
    }
    else if(!validateEmail()){
        emailError.innerHTML='email is required'
    }
    else if(!validatePassword()){
        passwordError.innerHTML='password is required'
    }

    if( validateName() &&validateEmail() && validatePassword() ){
        var status=document.getElementById('mycheck')
        status.checked=true
        alert(`user Succesfull logged in `)
    }
}


