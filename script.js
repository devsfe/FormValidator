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
function showError(input) {
    input.classList.add('error');  

    input.nextSibling.nextSibling.classList.add('error');
    
}

// Show error message
function errorMessage() {
    var small 
}


button.addEventListener('click', function(e){
    e.preventDefault(e);

    showError(username);
    showError(password);

    const inputItems = [nome,username,email,password,confirmPassword];
    
    inputItems.forEach(input =>   {

        
    });
})