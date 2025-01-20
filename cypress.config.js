import { defineConfig } from "cypress";
import cymapTasks from "cymap/src/cymapTasks.js";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task",{
        ...cymapTasks
      })
      return config;
      // implement node event listeners here
    },
  },
});
