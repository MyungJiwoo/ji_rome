const quotes = [
    {
        quote: "바람",
        author: "최유리",
    },

    {
        quote: "그래도",
        author: "최유리",
    },

    {
        quote: "굳은살",
        author: "최유리",
    },

    {
        quote: "예뻤어",
        author: "Day6",
    },

    {
        quote: "한 페이지가 될 수 있게",
        author: "Day6",
    },

    {
        quote: "Tick Tock",
        author: "Day6",
    },

    {
        quote: "난춘",
        author: "새소년",
    },

    {
        quote: "조용히 완전히 영원히",
        author: "너드커넥션",
    },

    {
        quote: "우리 서로 사랑하지는 말자",
        author: "기리보이",
    },

    {
        quote: "나랑 아니면",
        author: "검정치마",
    },
];

const quote = document.querySelector("#title");
const author = document.querySelector("#author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `🎶 ${todaysQuote.quote}`;
author.innerText = `- ${todaysQuote.author}`;
