
/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {//las peticiones http por default son promesas

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');//Metodo fetch para hacer peticiones http
    const data = await res.json();
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async ( element ) => { //debe ser async porque mas abajo voy a utilizar await
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';
    //const quote = await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
    }

    //Añadir listener para el button
    nextQuoteButton.addEventListener('click', () => {
        element.innerHTML = 'Loading...';
        fetchQuote()
        .then( ( data ) => renderQuote( data ) );
    })

    fetchQuote()
        .then( ( data ) => renderQuote( data ) );

}