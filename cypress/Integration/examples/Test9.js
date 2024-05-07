//// <reference types="Cypress" />

/// <reference types="Cypress-iframe" />

import 'cypress-iframe'

describe('Frame Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

      //Handling Frame and Asserting
      cy.frameLoaded('#courses-iframe')
      cy.iframe().find('a[href*="mentorship"]').eq(0).click()
      cy.wait(2000)
      cy.iframe().find("div.row h1[class*='pricing-title']").should('have.length',2)

      })      
          
    })
 

