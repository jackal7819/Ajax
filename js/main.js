let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
let newValue = document.createElement('h4');
let output = 0;
let rateCurrency = 0;
let input = document.querySelector('#input');
let inputValue = Number(input.value);
let btnCurrency = document.querySelectorAll('.exchange__button');

fetch(url)
    .then((response) => response.json())
    .then((currency) => {
        currency.forEach((item) => {
            amountCurrency(item);
        });
    });

function amountCurrency(item) {
    for (let elem of btnCurrency) {
        elem.addEventListener('click', () => {
            if (elem.getAttribute('data-rate') === item.cc) {
                exchangeRate(elem);
            }
        });

        function exchangeRate(elem) {
            rateCurrency = item.rate;
            output = Math.floor(inputValue / rateCurrency);
            newValue.replaceWith(newValue);
            newValue.innerHTML = `You can buy: ${output} ${elem.textContent}`;
        }

        let exchange = document.querySelector('.exchange');
        exchange.append(newValue);
        newValue.innerHTML = `You can buy: ${output}`;
    }
}