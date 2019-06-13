// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// DOM elements
const quote = document.querySelector('.quote'),
    source = document.querySelector('.source'),
    citation = document.querySelector('.citation'),
    year = document.querySelector('.year'),
    button = document.getElementById('loadQuote'),
    quoteBox = document.getElementById('quote-box');

// Collection of quotes
var quotes = [
    {
        quote:"Inspirational quote 1",
        source: "Source 1",
        citation: "Citation 1",
        year: "2018"
    },
    {
        quote:"Inspirational quote 2",
        source: "Source 2",
        citation: "Citation 2",
        year: "2017"
    },
    {
        quote:"Inspirational quote 3",
        source: "Source 3",
        citation: "Citation 3",
        year: "2016"
    },
    {
        quote:"Inspirational quote 4",
        source: "Source 4",
        citation: "Citation 4",
        year: "2015"
    },
    {
        quote:"Inspirational quote 5",
        source: "Source 5",
        citation: "Citation 5",
        year: "2014"
    }
];

// Gets random quote and inserts it onto page
function getRandomQuote() {
    var random = quotes[Math.floor(quotes.length * Math.random())];
    return random;
};

// Get random color to change the background of the body and button
function randomBackgroundColor() {
    var randomColor = '#'+Math.random().toString(16).substr(-6);
    document.body.style.backgroundColor = randomColor;
    button.style.backgroundColor = randomColor;
}

// Quote and colors change on click
function printQuote() {
    const quote = getRandomQuote();
    const quoteHTML = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
    ${quote.citation ? `<span class="citation">${quote.citation}</span>` : ""}
    ${quote.year ? `<span class="year">${quote.year}</span>` : ""}
    </p>`;
    quoteBox.innerHTML = quoteHTML;
    randomBackgroundColor();
};