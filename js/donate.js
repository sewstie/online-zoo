let inputMoney = document.querySelector('.content-input input[type="number"]');
let blockNumber = document.querySelector('.block-number');
let button = document.querySelector(".content-btn");
let inf_text = document.getElementById('donate-result');
inputEmail.addEventListener('inputMoney', onInput);

inputMoney.addEventListener('change', function() {
    blockNumber.textContent = Math.round((inputMoney.value/250)*10)/10;
});

function onInput() {
    if (!inputMoney.value) {
        inputMoney.style.borderColor = '#4B9200';
        inputMoney.style.border.color = '#4B9200';
    }
}

button.addEventListener('click', function(){
    if (!inputMoney.value) {
        inf_text.innerHTML = "Enter correct ammount!";
        inf_text.style.color = "#D31414";
        inputMoney.style.borderColor = '#D31414';
        inputMoney.style.border.color = '#D31414';

    } 
    else {
        inf_text.innerHTML = "Your donation was send";
        inf_text.style.color = "#4B9200";
        inputMoney.style.borderColor = '#4B9200';
        inputMoney.style.border.color = '#4B9200';
    }
});


inputMoney.oninput = function() {
    onInput();
};