// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

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
    }
];

var randomNumber = Math.floor((Math.random() * 3) + 1);

function printQuote() {
    console.log(quotes[0]);
}