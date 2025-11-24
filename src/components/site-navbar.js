// Import specific functions from the Firebase Auth SDK
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "/src/firebaseConfig.js";
import { logoutUser } from "/src/authentication.js";

class SiteNavbar extends HTMLElement {
  constructor() {
    super();
    this.renderNavbar();
    this.renderAuthControls();
  }

  renderNavbar() {
    this.innerHTML = `
    <!-- Navbar: single source of truth -->
    <div class="topbar">
      <div class="topbar-inner">
        <a href="app_index.html">
          <img
            src="https://www.svgrepo.com/show/532195/menu.svg"
            class="icon menu-icon"
            alt="menu"
          />
        </a>
        <input class="search" type="search" placeholder="Search" />
        <button
          class="btn btn-outline-light d-none d-sm-inline-block"
          type="button"
          aria-label="Search"
        >
          <img
            src="https://www.svgrepo.com/show/486229/magnifying-glass-backup.svg"
            class="icon right-icon"
            alt="help"
          />
        </button>

        <img
          src="https://www.svgrepo.com/show/512690/profile-1335.svg"
          class="icon profile-icon"
          alt="profile"
        />
        <div
          id="authControls"
          class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0"
        >
          <!-- populated by JS -->
        </div>
      </div>
      <h1 class="brand">PathFinder</h1>
    </div>
        `;
  }
  renderAuthControls() {
    const authControls = this.querySelector("#authControls");

    // Initialize with invisible placeholder to maintain layout space
    authControls.innerHTML = `<div class="btn btn-outline-light" style="visibility: hidden; min-width: 80px;">Log out</div>`;

    onAuthStateChanged(auth, (user) => {
      let updatedAuthControl;
      if (user) {
        updatedAuthControl = `<button class="btn btn-outline-light" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>`;
        authControls.innerHTML = updatedAuthControl;
        const signOutBtn = authControls.querySelector("#signOutBtn");
        signOutBtn?.addEventListener("click", logoutUser);
      } else {
        updatedAuthControl = `<a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>`;
        authControls.innerHTML = updatedAuthControl;
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
