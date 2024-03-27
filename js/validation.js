const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

let inputEmail = document.getElementById('email');
let inputButton = document.querySelector(".footer__top-btn");
let confText = document.getElementById('input-result');
inputEmail.addEventListener('inputEmail', onInput);

function onInput() {
    if (isEmailValid(inputEmail.value)) {
        inputEmail.style.borderColor = '#4B9200';
        inputButton.style.borderColor = '#4B9200';
        inputButton.style.color = '#4B9200';
        inputEmail.style.color = '#BDBDBD';
    } else {
        inputEmail.style.borderColor = '#D31414';
        inputButton.style.borderColor = '#D31414';
        inputButton.style.border.color = '#D31414';
        inputButton.style.color = '#D31414';
        inputEmail.style.color = '#BDBDBD';
    }
}
  
function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

inputButton.addEventListener('click', function(){
    if (isEmailValid(inputEmail.value)) {
        confText.innerHTML = "Your email was send";
        confText.style.color = "green";
        console.log('true');
    } else {
        confText.innerHTML = "Enter correct email!";
        confText.style.color = "red";
    }
});

inputEmail.oninput = function() {
    onInput();
};