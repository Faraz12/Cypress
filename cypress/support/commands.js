import HomePage from "../Integration/pageObjects/HomePage"
import FlightDetailsPage from "../Integration/pageObjects/FlightDetailsPage"
import PassengerDetailsPage from "../Integration/pageObjects/PassengerDetailsPage"
import ReviewBookingDetailsPage from "../Integration/pageObjects/ReviewBookingDetailsPage";
import SelectExtraPage from "../Integration/pageObjects/SelectExtraPage";
const homePage = new HomePage()
const flightDetailsPage = new FlightDetailsPage()
const passengerDetailsPage = new PassengerDetailsPage()
const reviewBookingDetailsPage =  new ReviewBookingDetailsPage()
const selectExtraPage = new SelectExtraPage()
let amount;
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('selectSource', (sourceName, airportName) => { 
    homePage.getAirportOriginEditBox().type(sourceName)
      cy.get('ul.search-list-dropdown li').each(($el, index, $list) => {
        const origin = $el.find('a div span').text()
        cy.log(origin)
        
        if(origin.includes(airportName))
            {
                cy.wrap($el).find('a div span').click({force: true})
                
            }

      })
 })


 Cypress.Commands.add('selectDestination', (destinationName) => { 
    homePage.getAirportDestinatonEditBox().click({force: true}).type(destinationName); 
    homePage.getListOfAirDestination().each(($el, index, $list) => {   
    // cy.get('ul.DestinationAirlist li').each(($el, index, $list) => {
        const destination = $el.find('a div span').text()
        cy.log(destination)
        if(destination.includes(destinationName))
            {
                //cy.wrap($el).click()
                cy.wrap($el).find('a div span').click({force: true})
            }

      })

})

Cypress.Commands.add('selectDate', (monthnumber, Startdate, EndDate) => { 
    //Select Date

    cy.get(':nth-child(2) > .lightpick__month-title-bar > .lightpick__next-action').click()
    homePage.getDepartureMonth().select(monthnumber)
    
  
    homePage.getDepartureDate().contains(Startdate).click()
    cy.get('div.departure-date.min-width.activeDate > label > div.date-afterSelected h6').then(function(Date){
      const text = Date.text()
      cy.log(text)
      expect(text).to.eq(Startdate)

    })
    homePage.getArrivalDate().contains(EndDate).click()
 })

 Cypress.Commands.add('selectDepartureDate', (Startdate) => { 
    flightDetailsPage.getFlightDepartureDate().each(($el, index, $list) => {
    // cy.get('div[class="flex-basis-css departFlightsBox"] div[class="calendar-backgrnd calWidget-body"] div.calendarTabParent').each(($el, index, $list) => {
        const ListStardDate = $el.find('div div div div p').text()
        cy.log(ListStardDate)
        if(ListStardDate.includes('23'))
          {
            cy.wrap($el).click()
          }



      }) 
  })


  Cypress.Commands.add('selectDepartureFareBrand', (BrandDepartcategory) => { 
    flightDetailsPage.getFareBrandForDeparture().each(($el, index, $list) => {
    const selectfarebrand = $el.find('div.fare-brand-heading div.fare-title-container').text()
    cy.log(selectfarebrand)
    
    if(selectfarebrand.includes(BrandDepartcategory))
        {
            cy.wrap($el).contains('SELECT').click()
            
        }

  }) })


//Select Fare Brand for Arrival

Cypress.Commands.add('selectArrivalFareBrand', (BrandArrivalcategory) => { 
    flightDetailsPage.getFareBrandForArrival().each(($el, index, $list) => {
        const selectArrvialfarebrand = $el.find('div.fare-brand-heading div.fare-title-container').text()
        cy.log(selectArrvialfarebrand)
        
        if(selectArrvialfarebrand.includes(BrandArrivalcategory))
            {
                cy.wrap($el).contains('SELECT').click()
                
            }

      })
 })


 Cypress.Commands.add('FillPassengerDetails', (FirstName, LastName, Email, MobileNumber) => { 
    cy.wait(5000)
    passengerDetailsPage.getFirstNameEditBox().type(FirstName)
    passengerDetailsPage.getLastNameEditBox().type(LastName)
    passengerDetailsPage.getEmailAddress().type(Email)
    passengerDetailsPage.getGenderCheckBox().click()
    cy.get('div.smart-search-input input#Code').click({force: true})
    cy.get('div.smart-search-input input#Code').type('971').each(($el, index, $list) => {
      const countryCode = $el.find('.countryCode').text()
      cy.log(countryCode)
      if (countryCode.includes('971')){
        countryCode.click()

      }
    })
    
    passengerDetailsPage.getMobileNumberEditBox().type(MobileNumber)

    //Added newly for amount text

    selectExtraPage.getTotalAmount().then(function(totalamount){
      amount = totalamount.text()
      cy.log("extrapage amount",amount)
    })



  })

Cypress.Commands.add('FillNextPassengerDetails', (FirstName, LastName) => { 
    passengerDetailsPage.getFirstNameEditBox().type(FirstName)
    passengerDetailsPage.getLastNameEditBox().type(LastName)
    passengerDetailsPage.getGenderCheckBox().click()
   })


Cypress.Commands.add('ClickNextPassengerDetailsbtn', () => { 

    passengerDetailsPage.getNextPassengerBtn().click({ force: true })

    })  

  Cypress.Commands.add('verifyDepatureDate', () => { 

    const Date = reviewBookingDetailsPage.getFirstSegmentDetailCard().find('interLineMsg')
        cy.log(Date)
      })
  
          
    

Cypress.Commands.add('EnterNumberOfPassenger', (NumberOfPsgn) => { 

      homePage.getAddPassengerBtn().click()
        for(let i=1; i<NumberOfPsgn; i++)
          {

           cy.get('div.adult-section div.action-btn div.plus').click()
      }
        
    
        })      

  
        
Cypress.Commands.add('verifyTotalBookingAmount', () => { 
   
  reviewBookingDetailsPage.getTotalAmount().then(function(reviewtotalamount){
    const bookingamount = reviewtotalamount.text()
    cy.log("bookingamount",bookingamount)
    expect(amount).to.eq(bookingamount)


   })
  


    
   
})
               
 
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })