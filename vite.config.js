import { defineConfig } from "vite";
import { resolve } from "path";

// This tells Vite/Rollup to treat multiple HTML files
// as entry points so each becomes its own page.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // If you add new HTML pages, add them here.
        index: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "main.html"),
        login: resolve(__dirname, "login.html"),
        // We dont have a profile page yet but this is here just in case
        // for in the future, just uncomment it if you do ever add one.
        // profile: resolve(__dirname, "profile.html"),
        goals: resolve(__dirname, "goals.html"),
        quiz: resolve(__dirname, "quiz.html"),
        // Don't put template.html here since user shouldn't even need to access it.
      },
      output: {
        preserveModules: true,
        // Keeps everything in "dist" folder to have the same folder structure as "src" folder.
        preserveModulesRoot: "src",
        assetFileNames: (assetInfo) => {
          const srcIndex = assetInfo.name.indexOf("src/");
          if (srcIndex !== -1) {
            // This puts assets in the same relative folder as they were in 'src'
            return assetInfo.name.substring(srcIndex + 4); // Skip 'src/'
          }
          // Fallback for assets not in src
          return "assets/[name][extname]";
        },
      },
    },
  },
});
