const form = document.getElementById('form');
const name = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


function showSuccess(input) {
    

    input.parentElement.classList.add('success');
}




form.addEventListener('click', function(e){
    e.preventDefault();

    showSuccess(username);
})