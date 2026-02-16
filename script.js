let quote = document.getElementById("quote");
let authorName = document.getElementById("authorName");
let GetQuoteBtn = document.getElementById("GetQuoteBtn");
let loader = document.getElementById("loader");

async function fetchQuote() {
  authorName.innerHTML = "";
  quote.innerHTML = "";
  loader.style.display = "block";

  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v2/randomquotes
`,
      {
        headers: {
          "X-Api-Key": "rn5oFv3HKXkhcLDoyyMfWjCdhEKFbOQ2T3v5t7pf",
        },
      },
    );

    if (!res.ok) throw new Error("Request failed");

    const data = await res.json();
    console.log(data);
    quote.innerHTML = data[0].quote;
    authorName.innerHTML = data[0].author;
  } catch (error) {
    loader.style.display = "none";
    quote.innerHTML = "Failed to fetch quote. Please try again.";
    console.error("Error:", error);
  } finally {
    loader.style.display = "none";
  }
}
GetQuoteBtn.addEventListener("click", fetchQuote);
