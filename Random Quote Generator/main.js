const quote = document.getElementById("quote");
const authorName = document.getElementById("name");

const newQuoteBtn = document.getElementById("new-quote-btn");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", () => {
  tweet();
});

newQuoteBtn.addEventListener("click", () => {
  getQuote();
});

async function getQuote() {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/quotes?category=inspirational",
    {
      headers: { "X-Api-Key": "YOUR_API_KEY" },
      contentType: "application/json",
    }
  );
  const data = await response.json();
  quote.innerHTML = `"${data[0].quote}"`;
  authorName.innerHTML = `<span>- </span>${data[0].author}`;
}

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML}`,
    "Tweet Window",
    "width=600, height=300"
  );
}

getQuote();
