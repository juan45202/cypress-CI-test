const { defineConfig } = require("cypress");
const cymapTasks = require("cymap/src/cymapTasks")

module.exports =  defineConfig({
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
