const form                  = document.getElementById('form');
const username              = document.getElementById('username');
const email                 = document.getElementById('email');
const password              = document.getElementById('password');
const confirmPassword       = document.getElementById('confirmpassword');

const submitBtn             = document.querySelector('.submit-btn');
submitBtn.addEventListener('click',()=>{
    checkInputs();
})
function checkInputs(){
    let usernameValue       = username.value.trim()
    let emailValue          = email.value.trim()
    let passwordValue       = password.value.trim()
    let confirmPasswordValue= confirmPassword.value.trim()
    if(usernameValue === ''){
        setError(username,"Username cannot be Blank")
    }else{
        setSuccess(username)
    }


    if(emailValue === ''){
        setError(email,"Email cannot be Blank")
    }else if(!isEmail(emailValue)){
        setError(email,"Not a valid email")
    }
    else{
        setSuccess(email)
    }


    if(passwordValue === ''){
        setError(password,"Password cannot be Blank")

    }else{
        setSuccess(password)
    }


    if(confirmPasswordValue === ''){
        setError(confirmPassword,"Password cannot be Blank")
    }else if(passwordValue !== confirmPasswordValue){
        setError(confirmPassword,"Password Doesn't match")
    }
    else{
        setSuccess(confirmPassword)
    }
    function isEmail(email){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
    
}
function setError(input,message){
    const formContent =  input.parentElement;
    const span =  formContent.querySelector('span')
    formContent.className = 'form-content error';
    span.innerText = message;
}   
function setSuccess(input){
    const formContent =  input.parentElement;
    // const span =  formContent.querySelector('span')
    formContent.className = 'form-content success';
    // span.innerText = message;
}