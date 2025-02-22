// js/components/Navbar.js
class Navbar {
    constructor(options = {}) {
      // Initialize any properties you might need
      this.menuItems = options.menuItems || ['Home', 'Stocks', 'About'];
    }
  
    render() {
      return `
        <nav class="navbar">
          <ul>
            ${this.menuItems.map(item => `<li><a href="#">${item}</a></li>`).join('')}
          </ul>
        </nav>
      `;
    }
  }
  
  // Export if using a module system
  // export default Navbar;
