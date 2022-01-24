const quotes = [
    {
        quote : "쉬운 일이었으면 나에게까지 오지 않았을 것",
        author : "신철민"
    },
    {
        quote : "강한 힘에는 큰 책임이 따른다.",
        author : "신철민"
    },
    {
        quote : "그냥 조선공이나 계속해",
        author : "정진호" 
    },
    {
        quote : "당신은 잘생겼다 나를 보기 전까지",
        author : "신철민"
    },
    {
        quote : "키가 작아서 행복하다 세상을 우러러 볼 수 있으니까",
        author : "정진호"
    },
    {
        quote : "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운데서 일한다.",
        author : "박명수"
    },
    {
        quote : "최고의 창조는 모방으로 부터 나온다.",
        author : "신철민"
    },
    {
        quote : "남들이 한번 뛸 때 난 두번 뛸 수 있다.",
        author : "정진호"
    },
    {
        quote : "난 돌이다 주먹이다",
        author : "정진호"
    },
    {
        quote : "형 술한잔 했다 동생들아 보고싶데이",
        author : "강원필"
    },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
