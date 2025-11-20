class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>${new Date().getFullYear()} Pathfinder BBY-23 <br>(Matthew, Melina, Hazen, Vincent)</footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
