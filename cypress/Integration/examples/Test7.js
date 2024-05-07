//Cypress- Spec

//// <reference types="Cypress" />
describe('My First Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
      //Handling Mouse Hover
      cy.get('.mouse-hover-content').invoke('show')
      cy.contains('Top').click();
      cy.url().should('include','top');
      
          
    })
  })

