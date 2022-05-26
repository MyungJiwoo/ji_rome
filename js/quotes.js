const quotes = [
    {
        quote: "Don't dwell on the past.",
        author: "Author unknown",
    },

    {
        quote: "Believe in yourself.",
        author: "Author unknown",
    },

    {
        quote: "Follow your heart.",
        author: "Author unknown",
    },

    {
        quote: "Seize the day.",
        author: "Author unknown",
    },

    {
        quote: "You only live once.",
        author: "Author unknown",
    },

    {
        quote: "Past is just past.",
        author: "Author unknown",
    },

    {
        quote: "Love yourself.",
        author: "Author unknown",
    },

    {
        quote: "Where there is a  will there is a way",
        author: "Angela Merkel",
    },

    {
        quote: "Don't beat yourself up.",
        author: "Author unknown",
    },

    {
        quote: "Life is a journey.",
        author: "Ralph Waldo Emerson",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
