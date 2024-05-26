class FlightDetailsPage{

getFlightDepartureDate(){

    return cy.get('div[class="flex-basis-css departFlightsBox"] div[class="calendar-backgrnd calWidget-body"] div.calendarTabParent')
}

getDepartureLowestFare(){

    return cy.get('#041_fare_14320894')
}

getArrivalLowestFare(){
    return cy.get('.returnOverlayBckgrnd fz-desktop-availability-list .avail-list-desk :nth-child(1) :nth-child(1) div div div div.flight-list-item-content')
    //cy.get('#050_fare_14320722')
}

getFareBrandForDeparture(){

    return cy.get('div.is-lowest-flight fz-fare-brand-column div.fare-brand-column')
}

getFareBrandForArrival(){

    return cy.get('fz-fare-brand-column div.fare-brand-column')
}



}


export default FlightDetailsPage