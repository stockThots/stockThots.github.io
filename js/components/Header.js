// js/components/Header.js
class Header {
    render() {
      return `
        <header class="header">
          <h1>stockThots</h1>

          <h3>Thoughts on Stocks</h3>
          <nav>

            <ul>
              <li><a href="https://x.com/theRyan27Show">X.com</a></li>
              <li><a href="">GitHub</a></li>
              <li><a href="">LinkedIn</a></li>
            </ul>
          </nav>
          <h3>&copy; ${new Date().getFullYear()} A Ryan Ronish Production</h3>
        </header>
      `;
    }
  }
