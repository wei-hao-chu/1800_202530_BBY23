class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.renderNavbar();
    this.renderAuthControls();
  }

  renderNavbar() {
    this.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        :host { display: block; }

        nav {
          background-color: #413C58;
          color: #f1faee;
          padding: 0.75rem 1.25rem;
          position: relative;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          transition: all 0.3s ease;
        }

        .hamburger {
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          width: 40px; height: 40px; cursor: pointer; gap: 6px; transition: opacity 0.3s ease; z-index: 1101;
        }
        .hamburger:hover { opacity: 0.8; }
        .bar { width: 25px; height: 3px; background-color: #f1faee; border-radius: 2px; transition: background-color 0.3s ease; }
        .hamburger:hover .bar { background-color: #878ed8ff; }

        .side-menu {
          position: fixed; top: 0; left: 0; width: 260px; height: 100%;
          background: #2E294E; transform: translateX(-100%); transition: transform 0.3s ease-in-out;
          display: flex; flex-direction: column; align-items: center; padding: 80px 24px; box-shadow: 3px 0 10px rgba(0,0,0,0.3); z-index: 1100;
        }
        .side-menu.open { transform: translateX(0); }

        .menu-logo {
          font-family: 'Pacifico', cursive; font-size: 42px; color: #f1faee; margin-bottom: 20px; text-align: center; user-select: none; pointer-events: none;
        }
        .menu-logo::after {
          content: ""; display: block; width: 80%; height: 1px; background-color: rgba(255, 255, 255, 0.3); margin: 20px auto 30px;
        }

        .side-menu a {
          color: #f1faee; text-decoration: none; padding: 12px 0; font-size: 18px; transition: color 0.3s ease; width: 100%; text-align: center;
        }
        .side-menu a:hover { color: #878ed8ff; }

        .overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.4);
          opacity: 0; pointer-events: none; transition: opacity 0.3s ease; z-index: 1099;
        }
        .overlay.show { opacity: 1; pointer-events: auto; }

        .right-section { display: flex; align-items: center; gap: 1rem; flex: 1; justify-content: flex-end; }

        .brand {
          font-family: 'Pacifico', cursive; font-size: 32px; color: #f1faee;
          transition: color 0.3s ease, opacity 0.3s ease; white-space: nowrap;
        }
        .brand:hover { color: #878ed8ff; }

        .search-container { position: relative; display: flex; align-items: center; transition: all 0.3s ease; }

        input[type="search"] {
          background: #ffffff;
          color: #000;
          border: 1px solid #ccc;
          border-radius: 4px;
          height: 38px;
          padding: 0 40px 0 12px;
          width: 180px;
          transition: width 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          box-sizing: border-box;
        }
        input[type="search"]:focus {
          outline: none;
          width: 400px;
          border-color: #878ed8ff;
          box-shadow: 0 0 0 2px rgba(135,142,216,0.3);
          background: #ffffff;
        }

        button.search-btn {
          position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
          background: transparent; border: none; cursor: pointer; width: 24px; height: 24px; padding: 0;
          display: flex; align-items: center; justify-content: center;
        }
        button.search-btn svg { width: 18px; height: 18px; fill: #555; transition: fill 0.2s ease; }
        button.search-btn:hover svg { fill: #000; }

        @media (max-width: 768px) {
        nav {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
        }

        /* Single-line order: [hamburger] [brand] [search] */
        .hamburger { order: 1; flex-shrink: 0; }
        .brand { order: 2; font-size: 26px; flex-shrink: 0; }

        .right-section {
            order: 3;
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        /* Keep the search area visible and steady on the right */
        .search-container {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: auto;
            flex: 0 1 auto;
            max-width: 60%;             /* adjust if you want wider/narrower */
        }

        /* Always-open input: fill its container, no width animation */
        input[type="search"] {
            width: 100%;
            min-width: 0;
            height: 38px;
            padding-left: 12px;
            padding-right: 36px;        /* space for the icon */
            box-sizing: border-box;
            transition: border-color 150ms ease, box-shadow 150ms ease; /* no width transition */
        }

        /* Focus style only (no size change) */
        input[type="search"]:focus {
            width: 100%;
            border-color: #878ed8ff;
            box-shadow: 0 0 0 2px rgba(135,142,216,0.3);
            outline: none;
        }

        /* Icon inside the box on the right */
        button.search-btn {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 24px; height: 24px;
            padding: 0; border: 0; background: transparent;
        }
        }

      </style>

      <nav>
        <div class="hamburger" id="hamburger" aria-label="Open menu" tabindex="0">
          <div class="bar"></div><div class="bar"></div><div class="bar"></div>
        </div>

        <div class="side-menu" id="sideMenu" aria-hidden="true">
          <div class="menu-logo">Pathfinder</div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/help">Help</a>
          <a href="/contact">Contact</a>
          <a href="/app_home.html">App</a>
        </div>

        <div class="overlay" id="overlay"></div>

        <div class="right-section">
          <div class="search-container">
            <input type="search" id="navSearch" placeholder="Search" aria-label="Search">
            <button type="button" class="search-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.867-3.833zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </button>
          </div>
          <span class="brand">Pathfinder</span>
        </div>
      </nav>
    `;

    const hamburger = this.querySelector("#hamburger");
    const sideMenu = this.querySelector("#sideMenu");
    const overlay = this.querySelector("#overlay");

    const closeMenu = () => {
      sideMenu.classList.remove("open");
      overlay.classList.remove("show");
    };
    hamburger.addEventListener("click", () => {
      const open = sideMenu.classList.toggle("open");
      overlay.classList.toggle("show", open);
    });
    overlay.addEventListener("click", closeMenu);
  }

  renderAuthControls() {}
}

customElements.define("site-navbar", SiteNavbar);
