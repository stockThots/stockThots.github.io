// js/components/FavoriteStocks.js
class FavoriteStocks {
    constructor({ stocks }) {
      this.stocks = stocks || ['V', 'PLTR', 'NVDA', 'HIMS'];
    }
  
    render() {
      return `
        <section class="favorite-stocks">
          <h2>Favorite Stocks</h2>
          <ul>
            ${this.stocks.map(stock => `<li>${stock}</li>`).join('')}
          </ul>
        </section>
      `;
    }
  }