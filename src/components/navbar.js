import { onAuthReady, logoutUser } from "../authentication.js";

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
          font-family: 'Pacifico', cursive;
          font-size: clamp(22px, 4.5vw, 32px);
          color: #f1faee;
          transition: color 0.3s ease, opacity 0.3s ease;
          white-space: nowrap;
          line-height: 1;          /* no vertical wobble */
          position: static;         /* ensure normal flow */
          transform: none;          /* cancel any global transforms */
          margin: 0;
          flex: 0 0 auto;
        }
        .site-brand:hover { color: #878ed8ff; }

        /* Responsive sizing for the auth button inside the navbar */
        #authBtn {
          padding: clamp(6px, 0.9vw, 10px) clamp(10px, 1.8vw, 16px);
          font-size: clamp(13px, 1.9vw, 15px);
        }

        .search-container { position: relative; display: flex; align-items: center; transition: all 0.3s ease; flex: 0 1 auto; }

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

        <div class="side-menu" id="sideMenu" aria-hidden="true">
          <a href="index.html"><div class="menu-logo">Pathfinder</div></a>
            <a href="main.html">App</a>
            <a href="quiz.html">Surveys</a>
            <a href="goals.html">Goals</a>
            <a href="index.html#slim">About Us</a>
            <a href="index.html#bcit">BCIT</a>
        </div>

        <div class="overlay" id="overlay"></div>

        <div class="right-section">
        <button
          id="authBtn"
          class="btn"
          type="button"
        >
          Login/Signup
        </button>
          <div class="search-container">
            <input type="search" id="navSearch" placeholder="Search News" aria-label="Search News">
            <button type="button" class="search-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.867-3.833zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
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
    const authBtn = this.querySelector("#authBtn");

    function updateGlobalAuthButtons(isLoggedIn) {
      // Update any plain page buttons that say exactly "Login/Signup"
      document.querySelectorAll("button").forEach((btn) => {
        const txt = (btn.textContent || "").trim();
        if (txt === "Login/Signup" || txt === "Logout") {
          btn.textContent = isLoggedIn ? "Logout" : "Login/Signup";
        }
      });
      // Attach click handler once to those buttons to provide immediate logout
      document.querySelectorAll("button").forEach((btn) => {
        const txt = (btn.textContent || "").trim();
        if (txt === "Login/Signup" || txt === "Logout") {
          // remove inline navigation attribute to avoid double action
          try {
            btn.removeAttribute("onclick");
          } catch (e) {}
          if (!btn.dataset.authHandler) {
            btn.addEventListener("click", (e) => {
              // Decide action based on current button text at click time
              e.preventDefault();
              const now = (btn.textContent || "").trim();
              if (now === "Logout") {
                // Immediately sign out and rely on logoutUser's redirect
                logoutUser().catch((err) =>
                  console.error("Logout failed", err)
                );
              } else {
                // Navigate to login page for signin/signup
                window.location.href = "login.html";
              }
            });
            btn.dataset.authHandler = "1";
          }
        }
      });
    }

    onAuthReady((user) => {
      const isLoggedIn = !!user;
      if (authBtn) authBtn.textContent = isLoggedIn ? "Logout" : "Login/Signup";
      updateGlobalAuthButtons(isLoggedIn);
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
