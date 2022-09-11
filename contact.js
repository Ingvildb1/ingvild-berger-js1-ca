
const Container = document.querySelector(".loading");
const form = document.querySelector("#contactForm");
const submitButton = document.querySelector("button");
const nameInput = document.querySelector("#name"); 
const nameInputError = document.querySelector("#firsnameError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adressInput = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");


function validateForm(event) {
    event.preventDefault();

    if (checkLength(nameInput.value, 0) === true) {
        firstnameError.style.display="none";
    }else {
        firstnameError.style.display = "block";
    }
    

    if (checkLength(message.value, 9) === true) {
        messageError.style.display="none";
    }else {
        messageError.style.display = "block";
    }

    if (checkLength(emailInput.value, 0) === true) {
        emailError.style.display="none";
    }else {
        emailError.style.display = "block";
    }

    if (checkLength(adressInput.value, 24) === true) {
        adressError.style.display="none";
    }else {
        adressError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);


//function to run when the form is submittet
function submitForm(event) {
    event.preventDefault();
    //Display a message when the form has been submitted
    message.innerHTML = '<div class="messageSubmitted">Thank you for your message!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);



// check the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}