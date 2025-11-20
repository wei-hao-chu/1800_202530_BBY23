import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";
import {
  doc,
  onSnapshot,
  getDoc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function showDashboard() {
  const nameElement = document.getElementById("name-goes-here"); // the <h1> element to display "Hello, {name}"

  onAuthReady(async (user) => {
    if (!user) {
      // If no user is signed in → redirect back to login page.
      location.href = "index.html";
      return;
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));
    const name = userDoc.exists()
      ? userDoc.data().name
      : user.displayName || user.email;

    // Update the welcome message with their name/email.
    if (nameElement) {
      nameElement.textContent = `${name}!`;
    }
  });
}

// Function to read the quote of the day from Firestore
function readQuote(day) {
  const quoteDocRef = doc(db, "quotes", day); // Get a reference to the document

  onSnapshot(
    quoteDocRef,
    (docSnap) => {
      // Listen for real-time updates
      if (docSnap.exists()) {
        const el = document.getElementById("quote-goes-here");
        if (el) el.innerHTML = docSnap.data().quote;
      } else {
        console.log("No such document!");
      }
    },
    (error) => {
      console.error("Error listening to document: ", error);
    }
  );
}

async function displayCardsDynamically() {
  let cardTemplate = document.getElementById("hikeCardTemplate");
  if (!cardTemplate) return;
  const hikesCollectionRef = collection(db, "hikes");

  try {
    const querySnapshot = await getDocs(hikesCollectionRef);
    querySnapshot.forEach((docSnap) => {
      // Clone the template
      let newcard = cardTemplate.content.cloneNode(true);
      const hike = docSnap.data(); // Get hike data once

      // Populate the card with hike data
      const titleEl = newcard.querySelector(".card-title");
      if (titleEl) titleEl.textContent = hike.name;
      const textEl = newcard.querySelector(".card-text");
      if (textEl)
        textEl.textContent = hike.details || `Located in ${hike.city}.`;
      const lengthEl = newcard.querySelector(".card-length");
      if (lengthEl) lengthEl.textContent = hike.length;

      const imgEl = newcard.querySelector(".card-image");
      if (imgEl) imgEl.src = `./images/${hike.code}.jpg`;

      const readMoreEl = newcard.querySelector(".read-more");
      if (readMoreEl) readMoreEl.href = `eachHike.html?docID=${docSnap.id}`;

      // Attach the new card to the container.
      const container = document.getElementById("hikes-go-here");
      if (container) container.appendChild(newcard);
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

async function seedHikes() {
  const hikesRef = collection(db, "hikes");
  const querySnapshot = await getDocs(hikesRef);

  // Check if the collection is empty
  if (querySnapshot.empty) {
    console.log("Hikes collection is empty. Seeding data...");
    addHikeData();
  } else {
    console.log("Hikes collection already contains data. Skipping seed.");
  }
}

// Helper function to add the sample hike documents.
function addHikeData() {
  const hikesRef = collection(db, "hikes");
  console.log("Adding sample hike data...");
  addDoc(hikesRef, {
    code: "BBY01",
    name: "Burnaby Lake Park Trail",
    city: "Burnaby",
    level: "easy",
    details: "A lovely place for a lunch walk.",
    length: 10,
    hike_time: 60,
    lat: 49.2467097082573,
    lng: -122.9187029619698,
    last_updated: serverTimestamp(),
  });
  addDoc(hikesRef, {
    code: "AM01",
    name: "Buntzen Lake Trail",
    city: "Anmore",
    level: "moderate",
    details: "Close to town, and relaxing.",
    length: 10.5,
    hike_time: 80,
    lat: 49.3399431028579,
    lng: -122.85908496766939,
    last_updated: serverTimestamp(),
  });
  addDoc(hikesRef, {
    code: "NV01",
    name: "Mount Seymour Trail",
    city: "North Vancouver",
    level: "hard",
    details: "Amazing ski slope views.",
    length: 8.2,
    hike_time: 120,
    lat: 49.38847101455571,
    lng: -122.94092543551031,
    last_updated: serverTimestamp(),
  });
}

// Initialize page features
displayCardsDynamically();
seedHikes();
showDashboard();
readQuote("tuesday");
