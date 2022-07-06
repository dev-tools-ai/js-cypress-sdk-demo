import { defineConfig } from "cypress";
import { registerSmartDriverTasks } from "@devtools-ai/cypress-sdk/dist/plugins";
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      registerSmartDriverTasks(on);
      // implement node event listeners here
      return config;
    },
  },
  chromeWebSecurity: false,
});
