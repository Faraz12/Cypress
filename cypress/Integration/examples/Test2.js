//Cypress- Spec

describe('My First Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get("form input[type='search']").type('ca')
      cy.wait(2000)
      //alias
      cy.get('.products').as('Productlocation')
      // Parent Child Chaining
      cy.get('@Productlocation').find('.product').should('have.length',4)
      cy.get('@Productlocation').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        // cy.log(textVeg)
        if(textVeg.includes('Cashews'))
        {
            cy.wrap($el).find('.product-action button').click()
            //cy.wrap($el).contains('ADD TO CART').click()    
        }       
      })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
      
    })
  })

