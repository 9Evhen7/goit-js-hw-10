import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { buildCountriesCards } from './buildCountriesCards';
import { buildSingleCountrieCard } from './buildSingleCountrieCard';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector("#search-box");
const countrieListRef = document.querySelector('.country-list')

inputRef.addEventListener('input', debounce(() => {
    if (!inputRef.value.trim()) {
        countrieListRef.innerHTML = '';
    } else {
        fetchCountries(inputRef.value)
            .then(response => {
                if (!response.ok) { 
                    throw new Error(response.status)
                }
            return response.json()
            })
            .then(countries => { 
                if (countries.length > 10) {
                    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
                }
                else if (countries.length > 1) {
                    countrieListRef.innerHTML = buildCountriesCards(countries)
                }
                else if (countries.length === 1) {
                    countrieListRef.innerHTML = buildSingleCountrieCard(countries[0])
                }
            }).catch(error => { 
                countrieListRef.innerHTML = '';
                Notiflix.Notify.failure('Oops, there is no country with that name')
            })
    }
}, DEBOUNCE_DELAY))






