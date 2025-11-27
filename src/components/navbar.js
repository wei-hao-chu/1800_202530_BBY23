// -------------------------------------------------------------
// Clean Pathfinder Navbar Component (FINAL)
// -------------------------------------------------------------

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/src/firebaseConfig.js";
import { logoutUser } from "/src/authentication.js";

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.renderNavbar();
    this.renderAuthControls();
  }

  renderNavbar() {
    this.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

        :host { display: block; width: 100%; }

        nav {
          background: #6f68a5ff;
          color: #f1faee;
          padding: 0.7rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 64px;
          position: relative;
          z-index: 1000;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          gap: 5px;
        }
        .bar {
          width: 26px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
        }

        .side-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 260px;
          height: 100vh;
          background: #2E294E;
          transform: translateX(-100%);
          transition: 0.3s ease;
          padding: 80px 24px;

          display: flex;
          flex-direction: column;
          align-items: center;    /* Center horizontally */
          text-align: center;     /* Center text inside */
          z-index: 1100;
        }
        .side-menu.open { transform: translateX(0); }

        .side-menu a {
          color: #fff;
          text-decoration: none;
          padding: 14px 0;
          text-align: center;
          font-size: 18px;
        }

        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.4);
          opacity: 0;
          pointer-events: none;
          transition: 0.3s ease;
          z-index: 1099;
        }
        .overlay.show {
          opacity: 1;
          pointer-events: auto;
        }

        .right-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .site-brand {
          font-family: "Pacifico", cursive;
          font-size: 28px;
          color: #fff;
          text-decoration: none;
        }

        .search-container {
          position: relative;
        }
        input[type="search"] {
          height: 36px;
          border-radius: 6px;
          padding: 0 36px 0 12px;
          border: none;
        }
        .search-btn {
          position: absolute;
          top: 50%; right: 10px;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          cursor: pointer;
        }

        button.nav-btn{
          background:#fff;
          border: none;
          padding: 6px 14px;
          border-radius: 6px;
          cursor:pointer;
        }

        @media{
        }
      </style>

      <nav>
        <div class="hamburger" id="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <div class="side-menu" id="sideMenu">
          <div class="menu-logo site-brand">Pathfinder</div>
          <a href="app_home.html">App</a>
          <a href="quiz.html">Surveys</a>
          <a href="goals.html">Goals</a>
          <a href="index.html">Home</a>
        </div>

        <div class="overlay" id="overlay"></div>

        <div class="right-section">
          <div class="search-container">
            <input type="search" placeholder="Search">
            <button class="search-btn">
              🔍
            </button>
          </div>

          <div id="authControls"></div>

          <a href="index.html" class="site-brand">Pathfinder</a>
        </div>
      </nav>
    `;

    // menu logic
    const hamburger = this.querySelector("#hamburger");
    const sideMenu = this.querySelector("#sideMenu");
    const overlay = this.querySelector("#overlay");

    hamburger.addEventListener("click", () => {
      const open = sideMenu.classList.toggle("open");
      overlay.classList.toggle("show", open);
    });

    overlay.addEventListener("click", () => {
      sideMenu.classList.remove("open");
      overlay.classList.remove("show");
    });
  }

  renderAuthControls() {
    const authControls = this.querySelector("#authControls");

    onAuthStateChanged(auth, (user) => {
      if (user) {
        authControls.innerHTML = `
          <button class="nav-btn" id="logoutBtn">Log out</button>
        `;
        this.querySelector("#logoutBtn")?.addEventListener("click", logoutUser);
      } else {
        authControls.innerHTML = `
          <button class="nav-btn" id="loginBtn">Log in</button>
        `;
        this.querySelector("#loginBtn")?.addEventListener("click", () => {
          window.location.href = "login.html";
        });
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
