class PassengerDetailsPage{

    getFirstNameEditBox(){

        return cy.get('[id="First_Name"]')
    }

    getLastNameEditBox(){

        return cy.get('[id="Last_Name"]')
    }

    getEmailAddress(){

        return cy.get('[id="Email_Address"]')
    }

    getGenderCheckBox(){

        return cy.get('[id="Male.Text"]')
    }

    getComboBoxCode(){

        return cy.get('input[id="Code"]')
    }


    getMobileNumberEditBox(){

        return cy.get('[id="Mobile_Number"]')
    }

    getReviewBookinigBtn(){

        return cy.get('div.continuePayment button span span')
    }

    getNextPassengerBtn(){

        return cy.get('.tabletContinue .next-passenger #button_comp .mat-button')
    }




}


export default PassengerDetailsPage