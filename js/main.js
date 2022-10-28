let newValue = document.createElement('h4');
let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
let output = 0;
let input = document.querySelector('#input');
let inputValue = 0;
let btnCurrency = document.querySelectorAll('.exchange__button');
let rateCurrency = 0;
let exchange = document.querySelector('.exchange');
exchange.append(newValue);
newValue.innerHTML = `You can buy: ${output}`;

btnCurrency.forEach((elem) => {
    elem.addEventListener('click', amountCurrency);
    function amountCurrency() {
        fetch(url)
            .then((response) => response.json())
            .then((currency) => {
                currency.forEach((item) => {
                    if (item.cc === elem.textContent) {
                        rateCurrency = item.rate;
                    }
                    inputValue = Number(input.value);
                    output = Math.floor(inputValue / rateCurrency);
                    newValue.replaceWith(newValue);
                    newValue.innerHTML = `You can buy: ${output} ${elem.textContent}`;
                });
            });
    }
});
