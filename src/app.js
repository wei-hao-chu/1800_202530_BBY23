import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Custom global styles:
import "/src/styles/style.css";

// Custom global JS code (shared with all pages)
onAuthReady(async (user) => {
  if (!user) {
    const currentPage = window.location.pathname.split("/").pop();
    // These are the only pages where it won't redirect to login
    const allowedPages = ["login.html", "signup.html", "index.html"];
    if (!allowedPages.includes(currentPage)) {
      // If no user is signed in it redirects back to login page.
      location.href = "login.html";
    }
    return;
  }

  const userDoc = await getDoc(doc(db, "users", user.uid));
  const name = userDoc.exists()
    ? userDoc.data().name
    : user.displayName || user.email;
});
