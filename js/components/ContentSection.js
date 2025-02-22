// js/components/ContentSection.js
class ContentSection {
    constructor({ title, cards }) {
      this.title = title;
      this.cards = cards || [];
    }
  
    render() {
      return `
        <section class="content-section">
          <h2>${this.title}</h2>
          <div class="cards-container">
            ${this.cards.map(card => card.render()).join('')}
          </div>
        </section>
      `;
    }
  }