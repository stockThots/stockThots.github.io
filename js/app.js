// js/app.js
// Assuming you're not using a module bundler,
// include these script files in index.html in the proper order

document.addEventListener("DOMContentLoaded", () => {
  // Existing components
  const navbar = new Navbar();
  const header = new Header();
  const footer = new Footer();

  document.getElementById('navbar').innerHTML = navbar.render();
  document.getElementById('header').innerHTML = header.render();
  document.getElementById('footer').innerHTML = footer.render();

  // Instantiate the Favorite Stocks component
  const favoriteStocks = new FavoriteStocks({
    stocks: ['AAPL', 'GOOGL', 'AMZN', 'MSFT']
  });
  document.getElementById('favorite-stocks-section').innerHTML = favoriteStocks.render();

  // Instantiate the Watchlist component
  const watchlist = new Watchlist({
    stocks: ['TSLA', 'NFLX', 'NVDA']
  });
  document.getElementById('watchlist-section').innerHTML = watchlist.render();

  // Create informational cards using our Card component
  const rsiCard = new Card({
    title: "Relative Strength Index (RSI)",
    content: "RSI is a momentum oscillator that measures the speed and change of price movements. Typically, above 70 indicates overbought, while below 30 indicates oversold conditions."
  });
  const macdCard = new Card({
    title: "MACD",
    content: "MACD is a trend-following momentum indicator that shows the relationship between two moving averages of a security's price, helping identify buy and sell signals."
  });

  // Group cards in a content section
  const contentSection = new ContentSection({
    title: "Technical Analysis",
    cards: [rsiCard, macdCard]
  });
  document.getElementById('content-section').innerHTML = contentSection.render();
});
