import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector("#search-box");
const countrieListRef = document.querySelector('.country-list')

inputRef.addEventListener('input', debounce(() => { 
    if (!inputRef.value.trim()) {
        countrieListRef.innerHTML = '';
    } else { 
            fetch(`https://restcountries.com/v3.1/name/${inputRef.value}`)
        .then(response => response.json())
        .then(countries => {
            if (countries.length === 1) {
                const countrieCard =
                    `<div class="card_title">
                    <img src="${countries[0].flags.svg}" alt="flag" class="card_icon">
                    <h1>${countries[0].name.common}</h1>
                </div>
                <ul>
                    <li class="card_item">
                        <p class="card_text"><span class="card_subtitle">Capital:</span> ${countries[0].capital[0]}</p>
                    </li>
                    <li class="card_item">
                        <p class="card_text"><span class="card_subtitle">Population:</span> ${countries[0].population}</p>
                    </li>
                    <li class="card_item">
                        <p class="card_text"><span class="card_subtitle">Languages:</span> ${Object.values(countries[0].languages)}</p>
                    </li>
                </ul>`;
                countrieListRef.innerHTML = countrieCard;
            } else { 
                        const countrieCard = countries.map(countrie => {
                return(`<li class="item">
                    <img src="${countrie.flags.svg}" alt="flag" class="icon">
                    <p>${countrie.name.common}</p></li>`)
            }).join('');
            countrieListRef.innerHTML = countrieCard;
            }

        })
        .catch(Error => {
    console.log('no countries')});
    }

}, DEBOUNCE_DELAY))


