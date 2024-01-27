const quotes = [{
    quote: `"The only thing we have to fear is fear itself."`,
    writer: `~Franklin D. Roosevelt`
},{
    quote: `"Do one thing every day that scares you."`,
    writer: `~Eleanor Roosevelt`
},{
    quote: `"Well done is better than well said."`,
    writer: `~Benjamin Franklin`
},{
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    writer: `~Aristotle`
},{
    quote: `"Be yourself; everyone else is already taken."`,
    writer: `~Oscar Wilde`
},{
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    writer: `~Maya Angelou`
},{
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `~Babe Ruth`
},{
    quote: `"Life is either a daring adventure or nothing."`,
    writer: `~Helen Keller`
},{
    quote: `"Life is a long lesson in humility."`,
    writer: `~James M. Barrie`
},{
    quote: `"Life is made of ever so many partings welded together."`,
    writer: `~Charles Dickens`
},{
    quote: `"Life is trying things to see if they work."`,
    writer: `~Ray Bradbury`
},{
    quote: `"If you really look closely, most overnight successes took a long time."`,
    writer: `~Steve Jobs`
},{
    quote: `"I find that the harder I work, the more luck I seem to have."`,
    writer: `~Thomas Jefferson`
},{
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    writer: `~Eleanor`
}]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})