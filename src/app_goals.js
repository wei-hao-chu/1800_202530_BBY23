import { db } from "/src/firebaseConfig.js";
import { onAuthReady } from "/src/authentication.js";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

let currentUser = null;
let editingId = null;

function escapeHtml(s) {
  return String(s || "").replace(
    /[&<>\\\"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}

function renderEmpty(listEl) {
  listEl.innerHTML = "<p>No saved goals yet.</p>";
}

function createGoalCard(goalDoc) {
  const data = goalDoc.data();
  const card = document.createElement("div");
  card.className = "goal-card";
  card.innerHTML = `
          <strong>${escapeHtml(data.title)}</strong> — <em>${escapeHtml(
    data.career
  )}</em>
          <div class="goal-meta">${escapeHtml(data.details || "")}</div>
          <div class="goal-meta">Target date: ${escapeHtml(
            data.byDate || ""
          )}</div>
          <div class="goal-controls">
            <button data-id="${
              goalDoc.id
            }" class="small-btn btn-secondary editBtn">Edit</button>
            <button data-id="${
              goalDoc.id
            }" class="small-btn btn-primary deleteBtn">Delete</button>
          </div>
        `;
  return card;
}

function bindListListeners(listEl) {
  listEl.addEventListener("click", async (ev) => {
    const editBtn = ev.target.closest(".editBtn");
    const delBtn = ev.target.closest(".deleteBtn");
    if (editBtn) {
      const id = editBtn.dataset.id;
      const d = await (
        await import(
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"
        )
      ).getDoc(doc(db, "users", currentUser.uid, "goals", id));
      const data = d.data();
      document.getElementById("career").value = data.career || "";
      document.getElementById("title").value = data.title || "";
      document.getElementById("details").value = data.details || "";
      document.getElementById("byDate").value = data.byDate || "";
      editingId = id;
      document.getElementById("saveBtn").textContent = "Save Changes";
    }
    if (delBtn) {
      const id = delBtn.dataset.id;
      if (confirm("Delete this goal?")) {
        await deleteDoc(doc(db, "users", currentUser.uid, "goals", id));
      }
    }
  });
}

onAuthReady(async (user) => {
  currentUser = user;
  if (!user) {
    // not signed in — show a message and stop
    const list = document.getElementById("goalsList");
    list.innerHTML = "<p>Please sign in to save and view goals.</p>";
    return;
  }

  const listEl = document.getElementById("goalsList");
  const goalsColRef = collection(db, "users", user.uid, "goals");
  const q = query(goalsColRef, orderBy("createdAt", "desc"));

  bindListListeners(listEl);

  onSnapshot(q, (snapshot) => {
    listEl.innerHTML = "";
    if (snapshot.empty) {
      renderEmpty(listEl);
      return;
    }
    snapshot.forEach((docSnap) => {
      const card = createGoalCard(docSnap);
      listEl.appendChild(card);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("goalForm");
  const clearBtn = document.getElementById("clearBtn");

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    if (!currentUser) {
      alert("Please sign in to save goals.");
      return;
    }

    const career = document.getElementById("career").value.trim();
    const title = document.getElementById("title").value.trim();
    const details = document.getElementById("details").value.trim();
    const byDate = document.getElementById("byDate").value;

    if (!career || !title || !byDate) {
      alert("Please fill career, title and target date.");
      return;
    }

    const goalsCol = collection(db, "users", currentUser.uid, "goals");

    if (editingId) {
      await updateDoc(doc(db, "users", currentUser.uid, "goals", editingId), {
        career,
        title,
        details,
        byDate,
        updatedAt: serverTimestamp(),
      });
      editingId = null;
      document.getElementById("saveBtn").textContent = "Save Goal";
    } else {
      await addDoc(goalsCol, {
        career,
        title,
        details,
        byDate,
        createdAt: serverTimestamp(),
      });
    }

    form.reset();
  });

  clearBtn.addEventListener("click", async () => {
    if (!currentUser) {
      alert("Please sign in to clear goals.");
      return;
    }
    if (confirm("Clear all saved goals?")) {
      // delete all docs in the user's goals collection (simple approach)
      const col = collection(db, "users", currentUser.uid, "goals");
      const snap = await (
        await import(
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"
        )
      ).getDocs(col);
      const deletes = snap.docs.map((d) =>
        deleteDoc(doc(db, "users", currentUser.uid, "goals", d.id))
      );
      await Promise.all(deletes);
    }
  });
});
