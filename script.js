const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.textContent = message
}

//Show success outline

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

//Email validation function
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Check user input function

function checkRequired(inputArr){
    inputArr.forEach((input)=> {
        if (input.value.trim() === ''){
            showError(input, `${fieldCap(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

//Capitalize alert field

function fieldCap(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Event listener

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);

})



// if (username.value === ''){
//     showError(username, 'Username is required')
// } else {
//     showSuccess(username)
// }

// if (email.value === ''){
//     showError(email, 'Email address is required')
// } else if (!validateEmail(email.value)) {
//     showError(email, 'Email is not valid')
// } else {
//     showSuccess(email)
// }

// if (password.value === ''){
//     showError(password, 'Password is required')
// } else {
//     showSuccess(password)
// }

// if (password2.value === ''){
//     showError(password2, 'Password confirmation is required')
// } else {
//     showSuccess(password2)
// }