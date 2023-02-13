import { defineConfig } from "cypress";
import { registerSmartDriverTasks } from "@devtools-ai/cypress-sdk/dist/plugins";
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      registerSmartDriverTasks(on, config);
      // implement node event listeners here
      return config;
    },env: {
      // NOTE: This is just for demo purposes and should not be used in production.
      interactiveMode: true,
    },
  },
  chromeWebSecurity: false,
});
