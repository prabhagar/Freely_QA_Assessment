const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.freely.me",
    viewportWidth: 1280,
    viewportHeight: 720
  }
});
