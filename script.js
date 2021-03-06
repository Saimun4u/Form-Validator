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
function validateEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(input).toLowerCase());
    if (re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not valid')
    }
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

//Check input length

function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${fieldCap(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${fieldCap(input)} must be more less than ${max} characters`)
    } else{
        showSuccess(input)
    }
}

//Check passwords match

function checkPasswordsMatch(input1, input2){
    if (input1.value != input2.value){
        showError(input2, 'Passwords do not match')
    }
}

//Event listener

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 20)
    validateEmail(email);
    checkPasswordsMatch(password, password2);
})



