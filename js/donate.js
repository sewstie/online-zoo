let inputMoney = document.querySelector('.content-input input[type="number"]');
let blockNumber = document.querySelector('.block-number');

inputMoney.addEventListener('change', function() {
    blockNumber.textContent = Math.round((inputMoney.value/250)*10)/10;
});