export function buildCountriesCards(countries) { 
    const countriesCards = countries.map(({name, flags}) => {
                    return (`<li class="item">
                    <img src="${flags.svg}" alt="flag" class="icon">
                    <p>${name.common}</p></li>`)
                }).join('');
                return countriesCards;
}