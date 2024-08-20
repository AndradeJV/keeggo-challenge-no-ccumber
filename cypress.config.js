const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/tests/**/*.test.js",
    baseUrl: 'https://advantageonlineshopping.com/#',
    viewportWidth: 1920,
    viewportHeight: 1080,

    env: {
      api: 'https://www.advantageonlineshopping.com/'
    }
  },
});
