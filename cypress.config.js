const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('<event>', (arg1, arg2) => {
      })
    },
  },
  reporter: "nyan", 
})

const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
    projectId: 'k61z49',
  },
});

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    projectId: 'k61z49',
  },
});

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    projectId: 'k61z49',

  },
});