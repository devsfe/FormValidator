const form = document.getElementById('form');
const nome = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const button = document.getElementById('form-button');


// Show success
function showSuccess(input) {
    input.classList.add('success');
}

// Show error
function showError(input, message) {
    input.classList.add('error');  

    input.nextSibling.nextSibling.classList.add('error');

    input.nextSibling.nextSibling.innerText = message;
}

//Check name, username & password length
function checkLength(nome, username, password) {

    //Name
    if(nome.value.length < 3) {
        showError(nome, 'Nome muito curto');
    } else if (nome.value.length > 16) {
        showError(nome, 'Nome muito longo');
    } else {
        showSuccess(nome);
    }

    //Username
    if(username.value.length < 5) {
        showError(username, 'Username muito curto');
    } else if (username.value.length > 20) {
        showError(username, 'Username muito longo');
    } else {
        showSuccess(username);
    }

    //Password
    if(password.value.length < 6) {
        showError(password, 'Password muito curto');
    } else if (password.value.length > 16) {
        showError(password, 'Password muito longo');
    } else {
        showSuccess(password);
    }
    
} 
    

// Check Email
function checkEmail() {
    
}


form.addEventListener('submit', function(e){
    e.preventDefault(e);

    checkLength(nome, username, password);
    checkEmail(email);

})  