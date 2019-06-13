// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

const quote = document.querySelector('.quote'),
    source = document.querySelector('.source'),
    citation = document.querySelector('.citation'),
    year = document.querySelector('.year');

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

function getRandomQuote(quotes) {
    var random = quotes[Math.floor(quotes.length * Math.random())];
    quote.innerHTML = random.quote;
    source.innerHTML = random.source;
    citation.innerHTML = random.citation;
    year.innerHTML = random.year;
    return random;
};

function printQuote() {
    getRandomQuote(quotes);
};