class SelectExtraPage{

    getExtraBaggage(){

        return cy.get(':nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > fz-baggage:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > fz-static-label:nth-child(1) > label:nth-child(1)')
    }

    getPassengerDetails(){

        return cy.get('.navigateToPassengerDetails')
    }

    getTotalAmount(){
        return cy.get('div[class="totalNpr"] div[class="currencyAmount ng-star-inserted"] fz-currency-amount div.ng-star-inserted :nth-child(2) label')
    }
     


}


export default SelectExtraPage