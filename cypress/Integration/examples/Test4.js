//Cypress- Spec

describe('My First Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
      //checkboxes
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"').click()

      //Handle Window Alert
      cy.on('window:alert', (str) => {

        expect(str).to.be.eql('Hello , share this practice page and share your knowledge')
      })

      cy.on('window:confirm', (str) => {

        expect(str).to.be.eql('Hello , Are you sure you want to confirm?')
      })
        
    })
  })

