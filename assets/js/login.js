const form=document.getElementById('form');
const firstName = document.getElementById('firstname');
const username=document.getElementById('username');
const password =document.getElementById('password');
const confirmPassword=document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setCorrect = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const firstNameValue = firstName.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = confirmPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required!');
    } else {
        setCorrect (username);
    }

    if(firstNameValue === ''){
        setError(firstName, 'First name is required!')
    } 
    else {
        setCorrect(firstName)
    }

    if(passwordValue === '') {
        setError(password, 'Password is required!');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character!')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(confirmPassword, 'Please confirm your password!');
    } else if (password2Value !== passwordValue) {
        setError(confirmPassword, "Passwords doesn't match!");
    } else {
        setSuccess(confirmPassword);
    }
};