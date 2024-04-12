import type { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      paste: (value: string) => Cypress.Chainable;
    }
  }
}
