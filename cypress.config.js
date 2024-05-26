const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://qa1-flights2.np.flydubai.com/',
    //Added to handle Default blank page is shown while running multiple it blocks
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/Integration/examples/*.js'
  },
});
