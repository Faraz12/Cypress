//Cypress- Spec
import HomePage from "../pageObjects/HomePage"
import FlightDetailsPage from "../pageObjects/FlightDetailsPage";
import SelectExtraPage from "../pageObjects/SelectExtraPage";
import PassengerDetailsPage from "../pageObjects/PassengerDetailsPage";
import ReviewBookingDetailsPage from "../pageObjects/ReviewBookingDetailsPage";
const homePage = new HomePage();
const flightDetailsPage = new FlightDetailsPage()
const selectExtraPage = new SelectExtraPage()
const passengerDetailsPage =  new PassengerDetailsPage()
const reviewBookingDetailsPage =  new ReviewBookingDetailsPage()
//// <reference types="Cypress" />
describe('Book The Flight and Get the Flight Confirmation', function() {
    beforeEach(() => {
      cy.fixture('date').then(function(data)
      {
        this.data=data

      })
     })
    it('Navigate to Fly Dubai URL,select Origin, Destination, Date and Number of Passenger and Search Flight', function()  {
      cy.visit('https://qa1-flydubai.np.flydubai.com/en/',{headers: { "Accept-Encoding": "gzip, deflate" }})
      cy.wait(2000)
      homePage.getSelectAcceptAll().click({force: true})
      cy.selectSource('Dubai', 'Dubai International Airport')
      homePage.getAirportOriginEditBox().should('have.value','Dubai')
      //Destination 
      cy.get(3000)
      cy.selectDestination('Muscat')
      cy.selectDate(this.data.monthnumber,this.data.Startdate, this.data.EndDate)
      
      //click No of passenger

      cy.EnterNumberOfPassenger(2)
      //cy.get('div[class*="view-booking-btn search-book-grid"] input[value="Search"]').click()
      homePage.getSearchBtn().click()
      
      //Accept All Flight Details page just now commented
      // cy.wait(2000)
      // homePage.getSelectAcceptAll().click()

       
      // cy.selectDepartureDate(this.data.Startdate)
      
      


      

      //click on extra baggage
      // cy.wait(7000)
      // selectExtraPage.getExtraBaggage().click({force: true})
      // selectExtraPage.getPassengerDetails().click()
      // cy.FillPassengerDetails('Faraz','Khan','fk@gmail.com','564411784')
      // cy.ClickNextPassengerDetailsbtn()
      // cy.FillNextPassengerDetails('Faraz','Khan')
      // passengerDetailsPage.getReviewBookinigBtn().click({force: true})
      // cy.wait(7000)
      // reviewBookingDetailsPage.getPassengerOne().should('be.visible')
      // reviewBookingDetailsPage.getPassengerTwo().should('be.visible')
      // reviewBookingDetailsPage.getSegmentCount().should('have.length',2)
      // //cy.verifyDepatureDate()

      // //verify route
      // cy.get('.departure-text label.ng-star-inserted div').should('include.text','Departure from Dubai')
      // cy.get('.departure-text label.ng-star-inserted div').should('include.text','Return from Muscat')
      // cy.verifyTotalBookingAmount()

    })
    it('Select Departure and Arrival Flight', function()  {
	  
	    cy.wait(2000)
      homePage.getSelectAcceptAll().click({force: true})
	    cy.selectDepartureDate(this.data.Startdate)

       
      // cy.selectDepartureDate(this.data.Startdate)
	
	
      flightDetailsPage.getDepartureLowestFare().click()

      cy.selectDepartureFareBrand('Value')
      
      //select Arrival lowest Fare
      cy.wait(2000)
      flightDetailsPage.getArrivalLowestFare().eq(0).click()

      //select Fare brand for Arrival

      cy.selectArrivalFareBrand('Value')
            
      })



      it('Select Extra baggage and Fill Passenger Details', function()  {

      cy.wait(7000)
      selectExtraPage.getExtraBaggage().click({force: true})
      selectExtraPage.getPassengerDetails().click()
      cy.FillPassengerDetails('Faraz','Khan','fk@gmail.com','564411784')
      cy.ClickNextPassengerDetailsbtn()
      cy.FillNextPassengerDetails('Faraz','Khan')
        
        
            
      })
      
      it('Go to Booking Review Page and Verify Number of Passengers,Segments,Route and Total amount', function()  {

      passengerDetailsPage.getReviewBookinigBtn().click({force: true})
      cy.wait(7000)
      reviewBookingDetailsPage.getPassengerOne().should('be.visible')
      reviewBookingDetailsPage.getPassengerTwo().should('be.visible')
      reviewBookingDetailsPage.getSegmentCount().should('have.length',2)
      //cy.verifyDepatureDate()

      //verify route
      cy.get('.departure-text label.ng-star-inserted div').should('include.text','Departure from Dubai')
      cy.get('.departure-text label.ng-star-inserted div').should('include.text','Return from Muscat')
      cy.verifyTotalBookingAmount()
          
          
              
        })  
      
      
})


