class HomePage{

getSelectAcceptAll(){

    return cy.get('.osano-cm-accept-all')
}


getAirportOriginEditBox(){

   return  cy.get('#airport-origin')          
}

getAirportDestinatonEditBox(){
    return cy.get('div.makeBookingTo:nth-child(2)')
}

getListOfAirDestination(){
    return cy.get('ul.DestinationAirlist li')
}

getDepartureMonth(){
    return cy.get(':nth-child(1) > .lightpick__month-title-bar > .lightpick__month-title > .lightpick__select-months')
}

getDepartureDate(){
    return cy.get('section:nth-child(1) div.lightpick__days')

}


getArrivalDate(){
    return cy.get('section:nth-child(1) > div:nth-child(3) > div')
}


getAddPassengerBtn(){

    return cy.get('div.traveller-details #travellerData')
}

getSearchBtn(){

    return cy.get('div[class*="view-booking-btn search-book-grid"] input[value="Search"]')
}


}

export default HomePage