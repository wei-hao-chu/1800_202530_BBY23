import { defineConfig } from "vite";
import { resolve } from "path";

// This tells Vite/Rollup to treat multiple HTML files
// as entry points so each becomes its own page.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        main: resolve(__dirname, "main.html"),
        // We dont have a profile page yet but this is here for in the future.
        profile: resolve(__dirname, "profile.html"),
        goals: resolve(__dirname, "goals.html"),
        quiz: resolve(__dirname, "quiz.html"),
        // Don't put template.html here since user shouldn't even need to access it.
      },
    },
  },
});
