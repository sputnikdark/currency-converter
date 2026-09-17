'use strict';

/**
 * Currency Converter (Währungsrechner)
 * Author: Andrii Rebikov (github.com/sputnikdark)
 * Description: Fetches real-time exchange rates via ExchangeRate-API
 * and recalculates values dynamically upon user interaction.
 */

const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const rateEl = document.getElementById('rate');
const swapBtn = document.getElementById('swap');
const timestampEl = document.getElementById('timestamp');

// Cache to prevent redundant network requests for the same base currency
const rateCache = new Map();

/**
 * Fetch rates for a given base currency
 * @param {string} baseCurrency 
 * @returns {Promise<Object>}
 */
async function fetchRates(baseCurrency) {
    if (rateCache.has(baseCurrency)) {
        return rateCache.get(baseCurrency);
    }

    const endpoint = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;
    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error(`HTTP-Fehler beim Abrufen der Kurse: Status ${response.status}`);
    }

    const data = await response.json();
    rateCache.set(baseCurrency, data);
    return data;
}

/**
 * Main calculate function: updates conversion results and rate indicators
 */
async function calculate() {
    const base = currencyOne.value;
    const target = currencyTwo.value;
    const amountVal = parseFloat(amountOne.value);

    if (isNaN(amountVal) || amountVal < 0) {
        amountTwo.value = '0.00';
        rateEl.textContent = 'Bitte einen gültigen Betrag eingeben';
        return;
    }

    try {
        rateEl.textContent = 'Kurs wird aktualisiert...';
        const data = await fetchRates(base);
        const rate = data.rates[target];

        if (rate === undefined) {
            throw new Error(`Zielwährung ${target} nicht gefunden.`);
        }

        const converted = (amountVal * rate).toFixed(2);
        amountTwo.value = converted;

        rateEl.textContent = `1 ${base} = ${rate.toFixed(4)} ${target}`;
        
        if (data.date) {
            timestampEl.textContent = `Stand der Kurse: ${data.date} | ExchangeRate-API`;
        }
    } catch (error) {
        console.error('Fehler bei der Währungsumrechnung:', error);
        rateEl.textContent = 'Fehler beim Laden des Wechselkurses';
        amountTwo.value = '-';
    }
}

/**
 * Swap base and target currencies with animation
 */
function swapCurrencies() {
    swapBtn.classList.add('rotate');
    setTimeout(() => swapBtn.classList.remove('rotate'), 300);

    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    calculate();
}

// Event Listeners
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swapCurrencies);

// Initial Calculation on Load
calculate();