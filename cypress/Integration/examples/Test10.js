//Cypress- Spec

describe('My First Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('a[href*="offers"]').invoke('removeAttr','target').click()
      const monthnumber = 'July'
      const date = '17'
      const year = '2027'
      cy.get('button[class*="calendar-button"]').click()
      cy.get('button[class*="_navigation__label"]').click()
      cy.get('button[class*="_navigation__label"]').click()
      cy.get('button[class*="decade-view__years__year"]').contains(year).click()
      cy.get('button[class*="-view__months__month"]').contains(monthnumber).click()
      cy.get('button[class*="__month-view__days__day"]').contains(date).click()
      

      
    })
  })

