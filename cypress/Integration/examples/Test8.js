//Cypress- Spec

//// <reference types="Cypress" />
describe('My First Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
      //Handling Child Tab using Prop Jquesry Method
      cy.get('#opentab').then(function(e1){
        const url = e1.prop('href')
        cy.visit(url);
        cy.origin(url, () => {
          cy.get('div.sub-menu-bar a[href*="about"]').click()


        })
        



      })
      // cy.origin('https://www.qaclickacademy.com/', ()=> {
      // cy.get('#navbarSupportedContent a[href*="about"]').click()
      // cy.get('.mt-50 h2').should('contain','QAClick Academy')
      //})
          
    })
  })

