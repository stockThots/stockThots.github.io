// js/components/Header.js
class Header {
    render() {
      return `
        <header class="header">
          <h1>stockThots</h1>
          <h3>&copy; ${new Date().getFullYear()} A Ryan Ronish Production</h3>
        </header>
      `;
    }
  }
