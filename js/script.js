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
        quote:"I walk away like a movie star, Who gets burned in a three way script, Enter number two, a movie queen",
        source: "Gordon Lightfoot",
        citation: "If You Could Read My Mind",
        year: "1970"
    },
    {
        quote:"The best way to find out if you can trust somebody is to trust them.",
        source: "Ernest Hemingway",
    },
    {
        quote:"And if California slides into the ocean, I predict this motel will be standing until I pay my bill",
        source: "Warren Zevon",
        citation: "Desperados Under the Eaves",
        year: "1976"
    },
    {
        quote:"Build your own dreams, or someone else will hire you to build theirs.",
        source: "Farrah Gray"
    },
    {
        quote:"You can’t use up creativity. The more you use, the more you have.",
        source: "Maya Angelou"
    }
];

// Choose quote at random
var currentNumber = 0;

function getRandomQuote() {
    var random = quotes[Math.floor(quotes.length * Math.random())];
    
    // Prevent same quote from appearing consecutively
    if(random === currentNumber) {
        random;
    }
    else {
        currentNumber = random;
    }
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

// Quote automatically changes every 8 seconds
setInterval(function() { 
    printQuote()
}, 8000);