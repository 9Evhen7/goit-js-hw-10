export function buildSingleCountrieCard({ name, flags, capital, population, languages }) {
    const countrieCard =
        `<div class="card_title">
                <img src="${flags.svg}" alt="flag" class="card_icon">
                <h1>${name.common}</h1>
            </div>
            <ul>
                <li class="card_item">
                    <p class="card_text"><span class="card_subtitle">Capital:</span> ${capital[0]}</p>
                </li>
                <li class="card_item">
                    <p class="card_text"><span class="card_subtitle">Population:</span> ${population}</p>
                </li>
                <li class="card_item">
                    <p class="card_text"><span class="card_subtitle">Languages:</span> ${Object.values(languages)}</p>
                </li>
            </ul>`;
                return countrieCard;
}