// js/components/Navbar.js
class Navbar {
    constructor(options = {}) {
      // Initialize any properties you might need
      this.menuItems = options.menuItems || ['Home', 'Stocks', 'About'];

      // Map each menu item to a URL
      this.menuLinks = {
        'Home': 'index.html',
        'Stocks': 'stocks.html',
        'About': 'about.html'
      };
    }
  
    render() {
      return `
        <nav class="navbar">
          <ul>
            ${this.menuItems.map(item => `<li><a href="${this.menuLinks[item] || '#'}">${item}</a></li>`).join('')}
          </ul>
        </nav>
      `;
    }
  }
  
  // Export if using a module system
  // export default Navbar;
