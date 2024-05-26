class ReviewBookingDetailsPage{

    getPassengerOne(){
        return cy.get(' mat-expansion-panel#passenger0')
    }

    getPassengerTwo(){
        return cy.get(' mat-expansion-panel#passenger1')
    }

    getSegmentCount(){
        return cy.get('.review-trip-flight-details-wrap')
    }

    getTotalAmount(){
        return cy.get('div:nth-child(4) > div:nth-child(2) > fz-currency-amount:nth-child(1) > div:nth-child(1) > fz-static-label:nth-child(2) > label:nth-child(1)')
    }

    getFirstSegmentDetailCard(){

        return cy.get('fz-review-trip-details:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > fz-flight-details-review:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    }



}

export default ReviewBookingDetailsPage