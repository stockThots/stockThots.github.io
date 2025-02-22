// js/components/Card.js
class Card {
    constructor({ title, content, imageUrl = null }) {
      this.title = title;
      this.content = content;
      this.imageUrl = imageUrl;
    }
  
    render() {
      return `
        <div class="card">
          ${this.imageUrl ? `<img src="${this.imageUrl}" alt="${this.title}" class="card-img">` : ''}
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.content}</p>
          </div>
        </div>
      `;
    }
  }
