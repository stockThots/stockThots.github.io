// js/components/Watchlist.js
class Watchlist {
    constructor({ stocks }) {
      this.stocks = stocks || ["MA", "NKE", "AMD", "FFIE"];
    }
  
    render() {
      return `
        <section class="watchlist">
          <h2>Watchlist</h2>
          <ul>
            ${this.stocks.map(stock => `<li>${stock}</li>`).join('')}
          </ul>
        </section>
      `;
    }
  }