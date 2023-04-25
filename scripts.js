const form = document.querySelector('.form');
const pwd = document.getElementById('password');
const newPwd = document.getElementById('password-confirmation');
const inputs = form.querySelectorAll('input');

function initValidation() {
    form.addEventListener('submit', validatePassword);
    inputs.forEach((input) => {
        input.addEventListener('invalid', addError)
        input.addEventListener('change', removeError);
    });
}

function validatePassword(event) {
    if (pwd.value !== newPwd.value) {
        event.preventDefault();
        pwd.classList.add('error', 'password-mismatch-error');
        newPwd.classList.add('error', 'password-mismatch-error');
    }
}

function addError() {
    this.classList.add('error');
}


function removeError() {
    if (this.type === 'password') {
        pwd.classList.remove('error', 'password-mismatch-error');
        newPwd.classList.remove('error', 'password-mismatch-error');
    } else {
        this.classList.remove('error');
    }
}


document.addEventListener('DOMContentLoaded', initValidation);