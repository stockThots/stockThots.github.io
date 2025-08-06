// js/components/Header.js
class Header {
  constructor() {
    this.links = [
      { name: 'X.com', url: 'https://x.com/theRyan27Show', icon: 'fab fa-x-twitter' },
      { name: 'Twitch', url: 'https://www.twitch.tv/ryanronish27', icon: 'fab fa-twitch' },
      { name: '_viewofdenver Instagram', url: 'https://www.instagram.com/_viewofdenver/', icon: 'fab fa-instagram' },
      { name: 'ryanronish', url: 'https://www.instagram.com/ryanronish/', icon: 'fab fa-instagram' },
      { name: 'stock.thoughts', url: 'https://www.instagram.com/stock.thoughts/', icon: 'fab fa-instagram' }
    ];
  }

  render() {
    return `
      <header class="header">
        <h1>stockThots</h1>
        <h3>Ryan's Thoughts on Stocks</h3>
        <nav class="navbar">
          <ul class="navbar-list">
            ${this.links.map(link => `
              <li class="navbar-item">
                <a href="${link.url}" target="_blank" rel="noopener" class="navbar-link">
                  <i class="${link.icon}"></i> ${link.name}
                </a>
              </li>
            `).join('')}
          </ul>
        </nav>
        <h3>&copy; ${new Date().getFullYear()} A Ryan Ronish Production</h3>
      </header>
    `;
  }
}
