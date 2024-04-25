require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      USER_ID: process.env.USER_ID,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
