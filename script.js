const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for error
    if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    return;
    }
   // Check to see if passwords match
   if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = '#22dc00';
    password2El.style.borderColor = '#22dc00';
   } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.'
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
   }
   // If form is valid and passwords match
   if (isValid && passwordsMatch)
   message.textContent = 'Successfully Registered!'
   message.style.color = '#22dc00';
   messageContainer.style.borderColor = '#22dc00';

}
  
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit Data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);
