//Cypress- Spec

//// <reference types="Cypress" />
describe('My First Test', function() {
    it('My fist Test Case', function()  {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
      //Handling Web Table and find out the exact course and it's price

      cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const coursName = $el.text();
        if(coursName.includes('Python'))
        {
          cy.get('tr td:nth-child(2)').eq(index).next().then(function (price){
            const coursePrice = price.text();
            expect(coursePrice).to.eql('25')
            cy.log(coursePrice);

          })

        }


      })
      
          
    })
  })

