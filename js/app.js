// js/app.js
// Assuming you're not using a module bundler,
// include these script files in index.html in the proper order

document.addEventListener("DOMContentLoaded", () => {
    // Create instances
    const header = new Header();
    const navbar = new Navbar();
    const footer = new Footer();
  
    // Inject the components into designated placeholders
    document.getElementById('header').innerHTML = header.render();
    document.getElementById('navbar').innerHTML = navbar.render();
    document.getElementById('footer').innerHTML = footer.render();
  
    // Additional logic: for instance, loading Adsense scripts if needed

    // Create an instance for the RSI card
    const rsiCard = new Card({
      title: "Relative Strength Index (RSI)",
      content:
        "RSI is a momentum oscillator that measures the speed and change of price movements. Typically, an RSI above 70 indicates overbought conditions, while an RSI below 30 indicates oversold conditions.",
    });
  
    // Create an instance for the MACD card
    const macdCard = new Card({
      title: "Moving Average Convergence Divergence (MACD)",
      content:
        "MACD is a trend-following momentum indicator that shows the relationship between two moving averages of a security's price. It helps in identifying potential buy and sell signals through the crossover of its moving averages.",
    });
  
    // Inject the cards into the page
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = rsiCard.render() + macdCard.render();


  });
