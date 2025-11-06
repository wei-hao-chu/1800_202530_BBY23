class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById('footer-flex-style')) {
      const style = document.createElement('style');
      style.id = 'footer-flex-style';
      style.textContent = `
        html, body {
          height: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
        footer {
          margin-top: auto;
        }
      `;
      document.head.appendChild(style);
    }

    this.innerHTML = `
      <footer class="py-3 my-4 border-top text-center bg-light">
        <p class="mb-0 text-muted">
          &copy; ${new Date().getFullYear()} Pathfinder BBY23 <br>(Matthew, Melina, Hazen, Vincent)
        </p>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
