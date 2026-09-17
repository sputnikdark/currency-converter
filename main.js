'use strict';

const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');

async function calculate() {
	try {
		const currency_one = currencyOne.value;
		const currency_two = currencyTwo.value;

		const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`);

		if (!response.ok) {
			throw new Error('Netzwerkfehler!');
		}

		const data = await response.json();
		const rate = data.rates[currency_two];

		const sum = (amountOne.value * rate).toFixed(2);
		amountTwo.value = sum;

		rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
	} catch (err) {
		console.error(err);
		rateEl.innerText = 'Fehler beim Laden des Kurses';
	} 
}

currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);

swapEl.addEventListener('click', () => {
	const temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp;
	calculate();
});

calculate();