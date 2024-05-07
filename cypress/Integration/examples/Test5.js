//Cypress- Spec

//// <reference types="Cypress" />
describe('My First Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
      //Handling Child Tab
      cy.get('#opentab').invoke('removeAttr','target').click()
      cy.origin('https://www.qaclickacademy.com/', ()=> {
      cy.get('#navbarSupportedContent a[href*="about"]').click()
      cy.get('.mt-50 h2').should('contain','QAClick Academy')
      })
          
    })
  })

