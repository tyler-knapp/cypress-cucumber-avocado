import { When } from "cypress-cucumber-preprocessor/steps";
import { cy } from "local-cypress";



When('I open Google page', () => {
    cy.visit("/");
})

// Then(`I see {string} in the title`, (title) => {
//   Cypress.title().should('include', title)
// })

